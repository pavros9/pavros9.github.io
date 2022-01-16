import "./header.scss";

const headerBurger = document.querySelector(".header__burger");
const headerWrapperBurger = document.querySelector(".header__wrapper-burger");
const headerNavigation = document.querySelector(".header__navigation");

headerWrapperBurger.onclick = function () {
  headerNavigation.classList.toggle("header__navigation_open");
  headerBurger.classList.toggle("header__burger_active");
  document.body.classList.toggle("body_lock");
};
