import { smoothScroll } from "./smoothScroll.js";
import { animateBurger } from "./animateBurger.js";
import { eventListen } from "./eventListeners.js";

smoothScroll();
animateBurger();
eventListen();

// --slider
const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  contain: true,
  pageDots: false,
  wrapAround: true,
});
// --/slider

// --img for background
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
// --/img for background
