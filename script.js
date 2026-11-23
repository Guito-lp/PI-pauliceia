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

// O efeito das letras do título "Pauliceia" fica em site-header.js (usado em todas as páginas).
