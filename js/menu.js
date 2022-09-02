const d = document;

const hamburger = d.querySelector(".menu-hamburger");
const closeMenu = d.querySelector(".close-menu");
const overlay = d.querySelector(".overlay");
const navegation = d.querySelector(".navigation-list");

hamburger.addEventListener("click", () => {
  overlay.classList.add("show");
  navegation.classList.add("show-menu");
  closeMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  overlay.classList.remove("show");
  navegation.classList.remove("show-menu");
  closeMenu.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (
    navegation.classList.contains("show-menu") &&
    e.target != navigation &&
    e.target != hamburger
  ) {
    navegation.classList.remove("show-menu");
    closeMenu.classList.remove("show");
    overlay.classList.remove("show");
  }
});
