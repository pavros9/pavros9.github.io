export function rebuild() {
  const description = document.querySelector(".description");
  const descriptionAnother = document.querySelector(".description-another");

  if (
    window.matchMedia("(min-width: 1920px)").matches &&
    description.children.length > 0
  ) {
    removeDiv(description, "description__wrapper", descriptionAnother);
  }

  window.addEventListener("resize", function () {
    if (
      window.matchMedia("(min-width: 1920px)").matches &&
      description.children.length > 0
    ) {
      removeDiv(description, "description__wrapper", descriptionAnother);
    }
    if (
      window.matchMedia("(max-width: 1919px)").matches &&
      !(description.children.length < 0)
    ) {
      if (descriptionAnother.children.length > 0) {
        removeDiv(descriptionAnother, "description__wrapper", description);
      }
    }
  });

  function removeDiv(parent, child, inWhich) {
    const childDiv = document.querySelector(`.${child}`);
    const content = parent.removeChild(childDiv);

    inWhich.insertAdjacentHTML("afterbegin", content.outerHTML);
  }
}
