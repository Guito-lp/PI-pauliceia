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


// Máquina de estados: ENTRADA -> PRONTO. Nunca retorna à ENTRADA sem recarregar.
(() => {
  const title = document.getElementById('hero-title');
  if (!title) return;
  const letters = [...title.querySelectorAll(':scope > span')];
  if (!letters.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let phase = 'entrada';
  const finishEntry = () => {
    if (phase !== 'entrada') return;
    phase = 'pronto';
    title.classList.add('paul-pronto');
  };
  if (reduced.matches) finishEntry();
  else {
    const last = letters[letters.length - 1];
    last.addEventListener('animationend', event => {
      if (event.target === last && event.animationName === 'paul-entrada') finishEntry();
    });
  }
  letters.forEach(letter => {
    letter.addEventListener('pointerenter', event => {
      if (phase !== 'pronto' || reduced.matches || event.pointerType === 'touch') return;
      letter.classList.remove('paul-pulando');
      void letter.offsetWidth;
      letter.classList.add('paul-pulando');
    });
    letter.addEventListener('animationend', event => {
      if (event.target === letter && event.animationName === 'paul-pulo') {
        letter.classList.remove('paul-pulando');
      }
    });
  });
})();
