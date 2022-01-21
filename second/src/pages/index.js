import "./index.scss";

// --img for background
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      let item = ibg[i];
      let src = item.querySelector("img").getAttribute("src").split(".");
      src.splice(-1, 1, "webp");
      let newSrc = src.join(".");

      testWebP(function (support) {
        if (support == true) {
          item.style.backgroundImage = "url(" + newSrc + ")";
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

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
