export function animateBurger() {
  const headerBurger = document.querySelector(".header__burger");
  const headerNavigation = document.querySelector(".header__navigation");

  headerBurger.onclick = function () {
    headerNavigation.classList.toggle("header__navigation-open");
    headerBurger.classList.toggle("active");
    document.body.classList.toggle("lock");
  };
}
