export function eventListen() {
  document.addEventListener("click", function (event) {
    const element = event.target;
    const itemImage = document.querySelectorAll(".header__image");
    const navigationLinks = document.querySelectorAll(".navigation__link");
    const headerNavigation = document.querySelector(".header__navigation");
    const headerBurger = document.querySelector(".header__burger");

    if (element.matches(".navigation__link")) {
      const nameClass = element.getAttribute("href").slice(1);
      const image = document.querySelector(`.header__${nameClass}`);

      for (let image of itemImage) {
        image.classList.remove("active");
      }
      for (let link of navigationLinks) {
        link.classList.remove("active");
      }

      if (headerNavigation.matches(".header__navigation-open")) {
        headerNavigation.classList.remove("header__navigation-open");
        headerBurger.classList.remove("active");
        this.body.classList.remove("lock");
      }
      element.classList.add("active");
      image.classList.add("active");
    }
  });
}
