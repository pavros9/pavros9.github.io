import { smoothScroll } from "./modules/smoothScroll.js";
import { animateBurger } from "./modules/animateBurger.js";
import { eventListen } from "./modules/eventListeners.js";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
smoothScroll();
animateBurger();
eventListen();

// --slider

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  contain: true,
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

window.onload = function () {
  ibg();
};

// img for background
