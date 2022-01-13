import ImageCompare from "image-compare-viewer";
export function sliderBeforeAfter() {
  const element = document.getElementById("image-compare");
  const options = {
    addCircle: true,
    addCircleBlur: false,
  };
  const viewer = new ImageCompare(element, options).mount();
  const body = document.querySelector(".body");

  // Remove unnecessary effect
  element.addEventListener("mousedown", function () {
    body.removeAttribute("style");
  });
}
