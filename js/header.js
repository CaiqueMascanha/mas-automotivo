for (let i = 1; i <= 5; i++) {
  let elemento = document.querySelector(`.menu-suspenso${i}`);
  let filhos = document.querySelector(`.sub-menu${i}`);
  elemento.addEventListener("focus", () => {
    if (i === 1) {
      filhos.classList.add("texte");
    } else if (i === 2) {
      filhos.classList.add("texte");
    } else if (i === 3) {
      filhos.classList.add("texte");
    } else if (i === 4) {
      filhos.classList.add("texte");
    } else if (i === 5) {
      filhos.classList.add("texte");
    }
    elemento.addEventListener("blur", () => {
      filhos.classList.remove("texte");
    });
  });
}
