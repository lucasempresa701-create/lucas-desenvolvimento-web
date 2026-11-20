const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

menuButton.hidden = false;

function setMenuOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

menu.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || menuButton.getAttribute("aria-expanded") !== "true") return;

  // Quando o menu fecha, o foco segue para a seção escolhida.
  const section = document.getElementById(link.hash.slice(1));
  section.focus({ preventScroll: true });
  setMenuOpen(false);
});

menuButton.closest(".site-header").addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menuButton.getAttribute("aria-expanded") !== "true") return;

  setMenuOpen(false);
  menuButton.focus();
});
