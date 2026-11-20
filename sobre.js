/* PAULICEIA — pop-ups de entrevista */
(() => {
  document.querySelectorAll('[data-interview]').forEach((button) => {
    const dialog = document.getElementById(button.dataset.interview);
    if (!dialog || typeof dialog.showModal !== 'function') return;

    button.addEventListener('click', () => dialog.showModal());
    dialog.addEventListener('click', (event) => {
      if (event.target.closest('[data-close]') || event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => button.focus());
  });
})();
