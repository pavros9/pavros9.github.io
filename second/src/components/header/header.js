import "./header.scss";

const headerBurger = document.querySelector(".header__burger");
const headerWrapperBurger = document.querySelector(".header__wrapper-burger");
const headerNavigation = document.querySelector(".header__navigation");

headerWrapperBurger.onclick = function () {
  headerNavigation.classList.toggle("header__navigation-open");
  headerBurger.classList.toggle("active");
  document.body.classList.toggle("lock");
};
