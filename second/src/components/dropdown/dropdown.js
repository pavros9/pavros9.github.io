import "./dropdown.scss";

window.addEventListener("click", function (event) {
  let target = event.target;
  const dropdown = document.querySelectorAll(".dropdown");

  if (target.closest(".dropdown__button")) {
    target.closest(".dropdown").classList.toggle("dropdown_show");
  }
  if (!event.target.closest(".dropdown")) {
    const dropdowns = document.querySelectorAll(".dropdown__content");

    dropdowns.forEach((dropdown) => {
      if (dropdown.closest(".dropdown_show")) {
        dropdown.closest(".dropdown_show").classList.remove("dropdown_show");
      }
    });
  }
});
