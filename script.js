const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const accessibilityButton = document.querySelector(".accessibility-toggle");
const themeButton = document.querySelector(".theme-toggle");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
  }
});

accessibilityButton.addEventListener("click", () => {
  const isEnabled = accessibilityButton.getAttribute("aria-pressed") === "true";
  accessibilityButton.setAttribute("aria-pressed", String(!isEnabled));
  document.documentElement.classList.toggle("large-type", !isEnabled);
});

themeButton.addEventListener("click", () => {
  const isEnabled = themeButton.getAttribute("aria-pressed") === "true";
  themeButton.setAttribute("aria-pressed", String(!isEnabled));
  document.body.classList.toggle("night-mode", !isEnabled);
});