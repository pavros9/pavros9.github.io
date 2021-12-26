export function smoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();

      const blockID = anchor.getAttribute("href");
      const block = document.querySelector("" + blockID);
      const elementPosition = block.getBoundingClientRect().top;
      const header = document.querySelector(".header");
      const heightHeader = calculateHeightHeader(header);
      const offsetPosition = elementPosition - heightHeader;

      window.scrollBy({
        behavior: "smooth",
        top: offsetPosition,
      });
    });
  }

  function calculateHeightHeader(header) {
    let heightHeader = 0;
    if (window.matchMedia("(max-width: 1199px)").matches) {
      heightHeader = header.offsetHeight;
    }
    return heightHeader;
  }
}
