// import { smoothScroll } from "./modules/smoothScroll.js";
import jQuery from "jquery";
import { animateBurger } from "./modules/animateBurger.js";
import { sliderBeforeAfter } from "./modules/slider-before-after.js";
import { flickity } from "./modules/flickity.js";
import { rebuild } from "./modules/rebuild.js";
import * as Webp from "./modules/webP.js";

animateBurger();
flickity();
sliderBeforeAfter();
rebuild();
Webp.isWebp();

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
