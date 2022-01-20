/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

document.addEventListener("resize", function (event) {
  if (event.target.closest(".bank-info")) {
    console.log("Yes");
  }
});
var oldBankSums = document.querySelectorAll(".bank-info__sum"); // oldBankSums.forEach((item) => {
//   console.log(item.innerHTML);
// });

window.addEventListener("resize", function (event) {
  if (window.matchMedia("(min-width: 768px)").matches) {// oldBankSums.forEach((oldBankSum) => {
    //   const oldValueBankSum = oldBankSum.innerHTML;
    //   const numSum = Number(oldBankSum.textContent);
    //   const numSumMl = numSum * 10 ** 6;
    //   const sumMl = new Intl.NumberFormat("ru-RU").format(numSumMl);
    //   oldBankSum.innerHTML = sumMl;
    // });
  } else {// oldBankSums.forEach((oldBankSum) => {
    //   const oldValueBankSum = oldBankSum.innerHTML;
    //   oldBankSum.innerHTML = oldValueBankSum;
    // });
  }
});

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

window.addEventListener("click", function (event) {
  var target = event.target;
  var dropdown = document.querySelectorAll(".dropdown");

  if (target.closest(".dropdown__button")) {
    target.closest(".dropdown").classList.toggle("dropdown_show");
  }

  if (!event.target.closest(".dropdown")) {
    var dropdowns = document.querySelectorAll(".dropdown__content");
    dropdowns.forEach(function (dropdown) {
      if (dropdown.closest(".dropdown_show")) {
        dropdown.closest(".dropdown_show").classList.remove("dropdown_show");
      }
    });
  }
});

/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

var headerBurger = document.querySelector(".header__burger");
var headerWrapperBurger = document.querySelector(".header__wrapper-burger");
var headerNavigation = document.querySelector(".header__navigation");

headerWrapperBurger.onclick = function () {
  headerNavigation.classList.toggle("header__navigation_open");
  headerBurger.classList.toggle("header__burger_active");
  document.body.classList.toggle("body_lock");
};

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

var parallaxBlock = document.querySelector(".parallax-block__container");

function parallax(event) {
  parallaxBlock.style.transform = "translateX(".concat(event.clientX / 50, "px) translateY(").concat(event.clientY / 50, "px)");
}

document.addEventListener("mousemove", parallax);

/***/ }),

/***/ 996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

document.addEventListener("DOMContentLoaded", function () {
  var position = 0;
  var slidesToShow = 1;
  var slidesToScroll = 1;
  var itemWidth = 100;
  var items = document.querySelectorAll(".slider-item");
  var track = document.querySelector(".slider__track");
  var btnPrev = document.querySelector(".slider__btn-prev");
  var btnNext = document.querySelector(".slider__btn-next");
  var itemsCount = items.length;
  var movePosition = slidesToScroll * itemWidth;

  btnPrev.onclick = function () {
    var itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  };

  btnNext.onclick = function () {
    var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  };

  function setPosition() {
    track.style.transform = "translateX(".concat(position, "%)");
  }

  function checkBtns() {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  }

  checkBtns();
});

/***/ }),

/***/ 117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

var spoilersArray = document.querySelectorAll("[data-spoilers]");

if (spoilersArray.length > 0) {
  // Инициализация
  var initSpoilers = function initSpoilers(spoilersArray) {
    var matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spoilersArray.forEach(function (spoilersBlock) {
      spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;

      if (matchMedia.matches || !matchMedia) {
        spoilersBlock.classList.add("_init");
        initSpoilerBody(spoilersBlock);
        spoilersBlock.addEventListener("click", setSpoilerAction);
      } else {
        spoilersBlock.classList.remove("_init");
        initSpoilerBody(spoilersBlock, false);
        spoilersBlock.removeEventListener("click", setSpoilerAction);
      }
    });
  }; // Работа с контентом


  var initSpoilerBody = function initSpoilerBody(spoilersBlock) {
    var hideSpoilerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var spoilerTitles = spoilersBlock.querySelectorAll("[data-spoiler]");

    if (spoilerTitles.length > 0) {
      spoilerTitles.forEach(function (spoilerTitle) {
        if (hideSpoilerBody) {
          spoilerTitle.removeAttribute("tabindex");

          if (!spoilerTitle.classList.contains("_active")) {
            spoilerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spoilerTitle.setAttribute("tabindex", "-1");
          spoilerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  };

  var setSpoilerAction = function setSpoilerAction(e) {
    var el = e.target;

    if (el.hasAttribute("data-spoiler") || el.closest("[data-spoiler]")) {
      var spoilerTitle = el.hasAttribute("data-spoiler") ? el : el.closest("[data-spoiler]");
      var spoilersBlock = spoilerTitle.closest("[data-spoilers]");
      var oneSpoiler = spoilersBlock.hasAttribute("data-one-spoiler") ? true : false;

      if (!spoilersBlock.querySelectorAll("._slide").length) {
        if (oneSpoiler && !spoilerTitle.classList.contains("_active")) {
          hideSpoilersBody(spoilersBlock);
        }

        spoilerTitle.classList.toggle("_active");

        _slideToggle(spoilerTitle.nextElementSibling, 500);
      }

      e.preventDefault();
    }
  };

  var hideSpoilersBody = function hideSpoilersBody(spoilersBlock) {
    var spoilerActiveTitle = spoilersBlock.querySelector("[data-spoiler]._active");

    if (spoilerActiveTitle) {
      spoilerActiveTitle.classList.remove("_active");

      _slideUp(spoilerActiveTitle.nextElementSibling, 500);
    }
  };

  // Получение обычных спойлеров
  var spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
    return !item.dataset.spoilers.split(",")[0];
  }); // Инициализация обычных спойлеров

  if (spoilersRegular.length > 0) {
    initSpoilers(spoilersRegular);
  } // Получение спойлеров с медиа запросами


  var spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
    return item.dataset.spoilers.split(",")[0];
  }); // Инициализация спойлеров с медиа запросом

  if (spoilersMedia.length > 0) {
    var breakpointsArray = [];
    spoilersMedia.forEach(function (item) {
      var params = item.dataset.spoilers;
      var breakpoint = {};
      var paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    }); // Получаем уникальные брейкпоинты

    var mediaQueries = breakpointsArray.map(function (item) {
      return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }); // Работаем с каждым брейкпоинтом

    mediaQueries.forEach(function (breakpoint) {
      var paramsArray = breakpoint.split(",");
      var mediaBreakpoint = paramsArray[1];
      var mediaType = paramsArray[2];
      var matchMedia = window.matchMedia(paramsArray[0]); // Объекты с нужными условиями

      var spoilersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      }); // Событие

      matchMedia.addListener(function () {
        initSpoilers(spoilersArray, matchMedia);
      });
      initSpoilers(spoilersArray, matchMedia);
    });
  }
} // SlideToggle


var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide"); //alert("!");
    }, duration);
  }
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");

    if (target.hidden) {
      target.hidden = false;
    }

    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      //   target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ItcTabs = /*#__PURE__*/function () {
  function ItcTabs(target, config) {
    _classCallCheck(this, ItcTabs);

    var defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs = typeof target === "string" ? document.querySelector(target) : target;
    this._elLinks = this._elTabs.querySelectorAll(".tabs__link");
    this._elPanes = this._elTabs.querySelectorAll(".tabs__pane");
    this._eventShow = new Event("tab.itc.show");

    this._events();
  }

  _createClass(ItcTabs, [{
    key: "show",
    value: function show(elLinkTarget) {
      var href = elLinkTarget.getAttribute("href");
      var elPaneTarget = document.querySelector(href);

      var elLinkActive = this._elTabs.querySelector(".tabs__link_active");

      var elPaneShow = this._elTabs.querySelector(".tabs__pane_show");

      if (elLinkTarget === elLinkActive) {
        return;
      }

      elLinkActive ? elLinkActive.classList.remove("tabs__link_active") : null;
      elPaneShow ? elPaneShow.classList.remove("tabs__pane_show") : null;
      elLinkTarget.classList.add("tabs__link_active");
      elPaneTarget.classList.add("tabs__pane_show");

      this._elTabs.dispatchEvent(this._eventShow);
    }
  }, {
    key: "showByIndex",
    value: function showByIndex(index) {
      var elLinkTarget = this._elLinks[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    }
  }, {
    key: "_events",
    value: function _events() {
      var _this = this;

      this._elTabs.addEventListener("click", function (e) {
        var target = e.target.closest(".tabs__link");

        if (target) {
          e.preventDefault();

          _this.show(target);
        }
      });
    }
  }]);

  return ItcTabs;
}();

var tabs = document.querySelectorAll(".tabs");

for (var i = 0, length = tabs.length; i < length; i++) {
  new ItcTabs(tabs[i]);
}

/***/ }),

/***/ 432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
 // --img for background

function ibg() {
  var ibg = document.querySelectorAll(".ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      (function () {
        var item = ibg[i];
        var src = item.querySelector("img").getAttribute("src").split(".");
        src.splice(-1, 1, "webp");
        var newSrc = src.join(".");
        testWebP(function (support) {
          if (support == true) {
            item.style.backgroundImage = "url(" + newSrc + ")";
          } else {
            item.style.backgroundImage = "url(" + item.querySelector("img").getAttribute("src") + ")";
          }
        });
      })();
    }
  }
}

window.onload = function () {
  ibg();
}; // img for background


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

/***/ }),

/***/ 775:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bank-info/bank-info.js": 391,
	"./button/button.js": 168,
	"./dropdown/dropdown.js": 390,
	"./footer/footer.js": 89,
	"./header/header.js": 788,
	"./house-card/house-card.js": 302,
	"./icon/icon.js": 318,
	"./image/image.js": 748,
	"./input/input.js": 660,
	"./link/link.js": 488,
	"./mortgage-info/mortgage-info.js": 953,
	"./parallax-block/parallax-block.js": 303,
	"./slider-item/slider-item.js": 996,
	"./slider/slider.js": 730,
	"./spoiler/spoiler.js": 117,
	"./tabs/tabs.js": 178
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 775;

/***/ }),

/***/ 695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./index.js": 432
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 695;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";



function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__(775));
requireAll(__webpack_require__(695));
})();

/******/ })()
;
//# sourceMappingURL=app.95b13966a7cbd0932d6d.js.map