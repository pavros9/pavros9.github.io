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
      let item = ibg[i];

      testWebP(function (support) {
        if (support == true) {
          let src = item.querySelector("img").getAttribute("src").split(/\./);

          if (!/\bsvg/.exec(src[src.length - 1])) {
            src.splice(-1, 1, "webp");
            let newSrc = src.join(".");
            item.style.backgroundImage = "url(" + newSrc + ")";
          } else {
            item.style.backgroundImage = "url(" + item.querySelector("img").getAttribute("src") + ")";
          }
        } else {
          item.style.backgroundImage = "url(" + item.querySelector("img").getAttribute("src") + ")";
        }
      });
    }
  }
}

window.onload = function () {
  ibg();
};
// img for background

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

// img for background
