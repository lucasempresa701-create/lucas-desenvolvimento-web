const menu = document.querySelector("#menu-items");
const filters = document.querySelector("#filters");
const orderList = document.querySelector("#order-items");
const orderPanel = document.querySelector("#pedido");
const orderEmpty = document.querySelector("#order-empty");
const orderStatus = document.querySelector("#order-status");
const subtotal = document.querySelector("#subtotal");
const finish = document.querySelector("#finish-order");
const confirmation = document.querySelector("#confirmation");

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const products = new Map(Array.from(menu.children, item => [
  item.dataset.item,
  {
    element: item,
    name: item.querySelector("h3").textContent,
    price: Number(item.dataset.price),
    add: item.querySelector("button"),
  },
]));
const order = new Map();

function orderLine(id, quantity, product) {
  const item = document.createElement("li");
  const description = document.createElement("span");
  description.textContent = `${quantity} × ${product.name}`;
  const remove = document.createElement("button");
  remove.type = "button";
  remove.dataset.remove = id;
  remove.textContent = "Remover 1";
  remove.setAttribute("aria-label", `Remover uma unidade de ${product.name}`);
  item.append(description, remove);
  return item;
}

function renderOrder() {
  let total = 0;
  const lines = [];
  for (const [id, product] of products) {
    const quantity = order.get(id) ?? 0;
    product.add.textContent = quantity ? `Adicionar (${quantity})` : "Adicionar";
    product.add.setAttribute("aria-label", `Adicionar ${product.name} ao pedido. Unidades no pedido: ${quantity}.`);
    if (quantity === 0) continue;

    total += product.price * quantity;
    lines.push(orderLine(id, quantity, product));
  }
  orderEmpty.hidden = lines.length > 0;
  orderList.replaceChildren(...lines);
  subtotal.textContent = currency.format(total / 100);
  finish.disabled = lines.length === 0;
  confirmation.textContent = "";
}

filters.addEventListener("click", (event) => {
  const selected = event.target.closest("button[data-filter]");
  if (!selected) return;

  for (const button of filters.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button === selected));
  }
  const category = selected.dataset.filter;
  for (const { element } of products.values()) {
    element.hidden = category !== "todos" && element.dataset.category !== category;
  }
});

menu.addEventListener("click", (event) => {
  const button = event.target.closest(".add-button");
  if (!button) return;

  const id = button.closest(".menu-item").dataset.item;
  order.set(id, (order.get(id) ?? 0) + 1);
  renderOrder();
  orderStatus.textContent = `${products.get(id).name} no pedido. Subtotal ${subtotal.textContent}.`;
});

orderList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove]");
  if (!button) return;

  const id = button.dataset.remove;
  const index = Array.from(orderList.querySelectorAll("button")).indexOf(button);
  const quantity = order.get(id);
  if (quantity === 1) {
    order.delete(id);
  } else {
    order.set(id, quantity - 1);
  }
  renderOrder();

  const buttons = orderList.querySelectorAll("button");
  const nextFocus = buttons[Math.min(index, buttons.length - 1)] ?? orderPanel;
  nextFocus.focus();
  orderStatus.textContent = `Unidade removida. Subtotal ${subtotal.textContent}.`;
});

finish.addEventListener("click", () => {
  confirmation.textContent = `Simulação concluída. Subtotal ${subtotal.textContent}. Nenhum pedido foi enviado.`;
});

renderOrder();
filters.hidden = false;
document.querySelector("#order-controls").hidden = false;
for (const { add } of products.values()) add.hidden = false;
