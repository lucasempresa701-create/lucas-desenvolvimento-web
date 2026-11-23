const controls = document.querySelector("#estimate-controls");
const service = document.querySelector("#service");
const size = document.querySelector("#size");
const result = document.querySelector("#estimate-result");
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function updateEstimate() {
  if (!service.value || !size.value) {
    result.textContent = "Escolha um serviço e um porte para ver o valor.";
    return;
  }

  const serviceOption = service.selectedOptions[0];
  const sizeName = size.selectedOptions[0].textContent.toLowerCase();
  const price = Number(serviceOption.dataset[size.value]);
  result.textContent = `${serviceOption.textContent} para porte ${sizeName}. Valor estimado de ${currency.format(price)}.`;
}

controls.addEventListener("change", updateEstimate);
updateEstimate();
controls.hidden = false;
