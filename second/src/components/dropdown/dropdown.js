import "./dropdown.scss";

window.addEventListener("click", function (event) {
  let target = event.target;
  //   console.log(oldTarget);
  if (target.closest(".dropdown__button")) {
    target.closest(".dropdown").classList.toggle("dropdown_show");
  }
  if (!event.target.closest(".dropdown")) {
    const dropdowns = document.querySelectorAll(".dropdown__content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.closest(".dropdown_show")) {
        openDropdown.closest(".dropdown_show").classList.remove("dropdown_show");
      }
    }
  }
});
