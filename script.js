const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const accessibilityButton = document.querySelector(".accessibility-toggle");
const themeButton = document.querySelector(".theme-toggle");

const setPreference = (key, enabled) => {
  localStorage.setItem(key, String(enabled));
};

const highContrastEnabled = localStorage.getItem("pauliceia-high-contrast") === "true";
const darkModeEnabled = localStorage.getItem("pauliceia-dark-mode") === "true";
document.documentElement.classList.toggle("high-contrast", highContrastEnabled);
document.body.classList.toggle("night-mode", darkModeEnabled);

if (accessibilityButton) {
  accessibilityButton.setAttribute("aria-pressed", String(highContrastEnabled));
  accessibilityButton.setAttribute("aria-label", highContrastEnabled ? "Desativar alto contraste" : "Ativar alto contraste");
  accessibilityButton.addEventListener("click", () => {
    const isEnabled = accessibilityButton.getAttribute("aria-pressed") === "true";
    accessibilityButton.setAttribute("aria-pressed", String(!isEnabled));
    accessibilityButton.setAttribute("aria-label", isEnabled ? "Ativar alto contraste" : "Desativar alto contraste");
    document.documentElement.classList.toggle("high-contrast", !isEnabled);
    setPreference("pauliceia-high-contrast", !isEnabled);
  });
}

if (themeButton) {
  themeButton.setAttribute("aria-pressed", String(darkModeEnabled));
  themeButton.setAttribute("aria-label", darkModeEnabled ? "Ativar tema claro" : "Ativar tema escuro");
  themeButton.addEventListener("click", () => {
    const isEnabled = themeButton.getAttribute("aria-pressed") === "true";
    themeButton.setAttribute("aria-pressed", String(!isEnabled));
    themeButton.setAttribute("aria-label", isEnabled ? "Ativar tema escuro" : "Ativar tema claro");
    document.body.classList.toggle("night-mode", !isEnabled);
    setPreference("pauliceia-dark-mode", !isEnabled);
  });
}

if (menuButton && navigation) {
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
}

const placeSearch = document.querySelector("#place-search");
const placeCards = [...document.querySelectorAll(".place-card")];
const resultsCount = document.querySelector("#results-count");
const noResults = document.querySelector("#no-results");

if (placeSearch && resultsCount && noResults) {
  const filterPlaces = () => {
    const query = placeSearch.value.trim().toLocaleLowerCase("pt-BR");
    let visibleCount = 0;

    placeCards.forEach((card) => {
      const matches = card.dataset.search.toLocaleLowerCase("pt-BR").includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    resultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? "lugar encontrado" : "lugares encontrados"}`;
    noResults.hidden = visibleCount > 0;
  };

  placeSearch.addEventListener("input", filterPlaces);
  document.querySelector("#random-place").addEventListener("click", () => {
    const visibleCards = placeCards.filter((card) => !card.hidden);
    if (visibleCards.length === 0) return;
    const randomCard = visibleCards[Math.floor(Math.random() * visibleCards.length)];
    window.location.href = randomCard.querySelector(".place-card-link").href;
  });
}

const savePlaceButton = document.querySelector("#save-place");
if (savePlaceButton) {
  savePlaceButton.addEventListener("click", () => {
    const isSaved = savePlaceButton.getAttribute("aria-pressed") === "true";
    savePlaceButton.setAttribute("aria-pressed", String(!isSaved));
    savePlaceButton.textContent = isSaved ? "♡ Salvar" : "♥ Salvo";
  });
}