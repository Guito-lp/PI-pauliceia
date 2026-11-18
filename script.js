/* PAULICEIA — menu mobile, tema escuro e alto contraste */
(() => {
  const root = document.documentElement;
  const body = document.body;

  const store = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* ignora */ }
    },
  };

  /* ---------- Menu mobile ---------- */
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");

  function setMenu(open) {
    if (!menuButton || !nav) return;
    nav.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Tema escuro ---------- */
  const themeButton = document.querySelector(".theme-toggle");

  function setTheme(night) {
    body.classList.toggle("night-mode", night);
    if (!themeButton) return;
    themeButton.setAttribute("aria-pressed", String(night));
    themeButton.setAttribute("aria-label", night ? "Desativar tema escuro" : "Ativar tema escuro");
  }

  setTheme(store.get("pauliceia-theme") === "night");
  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const night = !body.classList.contains("night-mode");
      setTheme(night);
      store.set("pauliceia-theme", night ? "night" : "day");
    });
  }

  /* ---------- Alto contraste ---------- */
  const contrastButton = document.querySelector(".accessibility-toggle");

  function setContrast(on) {
    root.classList.toggle("high-contrast", on);
    if (!contrastButton) return;
    contrastButton.setAttribute("aria-pressed", String(on));
    contrastButton.setAttribute("aria-label", on ? "Desativar alto contraste" : "Ativar alto contraste");
  }

  setContrast(store.get("pauliceia-contrast") === "on");
  if (contrastButton) {
    contrastButton.addEventListener("click", () => {
      const on = !root.classList.contains("high-contrast");
      setContrast(on);
      store.set("pauliceia-contrast", on ? "on" : "off");
    });
  }

  /* ---------- Pop-ups de entrevista ---------- */
  document.querySelectorAll("[data-interview]").forEach((btn) => {
    const dialog = document.getElementById(btn.dataset.interview);
    if (!dialog || typeof dialog.showModal !== "function") return;

    btn.addEventListener("click", () => dialog.showModal());

    dialog.addEventListener("click", (e) => {
      // fecha no botão × ou ao clicar fora da caixa (no fundo escuro)
      if (e.target.closest("[data-close]") || e.target === dialog) dialog.close();
    });

    // devolve o foco ao botão que abriu o pop-up
    dialog.addEventListener("close", () => btn.focus());
  });
})();
