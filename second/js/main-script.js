// --img for background
function ibg() {
  const ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = `url(${ibg[i].querySelector("img").getAttribute("src")})`;
    }
  }
}

ibg();
// --/img for background

// --burger
const headerBurger = document.querySelector(".header__burger");
const headerNavigation = document.querySelector(".header__navigation");

headerBurger.onclick = function () {
  headerNavigation.classList.toggle("header__navigation-open");
  headerBurger.classList.toggle("active");
  document.body.classList.toggle("lock");
};

// --/burger

const form = document.querySelector(".mortgage__form");

function isEmpty(str) {
  return !str || 0 === str.length;
}

form.addEventListener(
  "blur",
  function (event) {
    let target = event.target;
    let number = Number(target.value);
    let numberNew = number.toLocaleString("ru-RU");
    if (isEmpty(number) == false) {
      target.value = numberNew;
    }
  },
  true
);

const btnInput = form.querySelectorAll(".btn-input");
const choiceBlock = form.querySelectorAll(".choice-block");

btnInput.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    choiceBlock[index].classList.toggle("choice-block_active");
  });
});
// console.log(choiceBlock);
// choiceBlock.forEach((block, index) => {
//   block.addEventListener("click", function (e) {
//     console.log(block);
//     console.log(choiceBlock);
//     let target = e.target;
//     console.log(target);
//     if (block.className != "choice-block") {
//       block.classList.remove("choice-block_active");
//     }
//   });
// });

///сокращение числа

///сокращение числа

document.onclick = function (event) {
  if (event.target.className != "choice-block__item") {
    let target = event.target;
    console.log(target, "Вне");
    let ancestor = target.closest(".mortgage__form");
    console.log(ancestor);
    ancestor.classList.remove("choice-block_active");
  } else {
    console.log("Внутри");
  }
};

const paymentImg = document.querySelector(".column-payment__img");
const paymentPrompt = document.querySelector(".column-payment__prompt");

paymentImg.addEventListener("click", function (e) {
  paymentPrompt.classList.toggle("column-payment__prompt_open");
});

// --parallax
const layer = document.querySelector(".parallax__layer");
function parallax(event) {
  layer.style.transform = `translateX(${event.clientX / 50}px) translateY(${event.clientY / 50}px)`;
}

document.addEventListener("mousemove", parallax);

// --parallax

// --slider
document.addEventListener("DOMContentLoaded", function () {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const itemWidth = 100;
  const items = document.querySelectorAll(".slider__item");
  const track = document.querySelector(".slider__track");
  const btnPrev = document.querySelector(".slider__btn-prev");
  const btnNext = document.querySelector(".slider__btn-next");
  const itemsCount = items.length;
  const movePosition = slidesToScroll * itemWidth;

  btnPrev.onclick = function () {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  };

  btnNext.onclick = function () {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  };

  function setPosition() {
    track.style.transform = `translateX(${position}%)`;
  }

  function checkBtns() {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  }
  checkBtns();
});
// --/slider

function createNewObj(element, elClass, inner) {
  let newElement = document.createElement(element);

  newElement.classList.add(elClass);
  newElement.innerHTML = inner;
  return newElement;
}

const ad = document.querySelector(".ad");
const declaration = document.querySelector(".declaration");

class MainSlider extends HTMLDivElement {
  constructor() {
    super();

    let adClone = ad.cloneNode(true);
    let declarationClone = declaration.cloneNode(true);
    let buttonDetail = createNewObj("a", "slider__btn-detail", "Подробнее");

    buttonDetail.setAttribute("href", "#");
    this.prepend(adClone, declarationClone, buttonDetail);
  }
}

customElements.define("main-slider", MainSlider, { extends: "div" });

class BankTerms extends HTMLDivElement {
  constructor() {
    super();

    let mediaQuery = window.matchMedia("(max-width: 991px)");
    let bid = this.querySelector(".terms-component__bid");
    let titleBid = this.querySelector(".terms-component__bid .terms-component__title");
    let payment = this.querySelector(".terms-component__payment");
    let button = createNewObj("a", "begin-terms__btn", "Подробнее");
    let textBid = createNewObj("div", "terms-component__text-grey", "Ставка");
    let textPayment = createNewObj("div", "terms-component__text-grey", "Платеж");

    button.setAttribute("href", "#");
    this.prepend(button);
    bid.prepend(textBid);
    payment.prepend(textPayment);
    let numberSum = this.querySelector(".terms-component__sum .terms-component__title");
    let numberStr = numberSum.innerHTML;
    let numberOld = numberSum.cloneNode(true);

    function Change(e) {
      if (e.matches) {
        let newNumber = numberStr.replace(/\s+/g, "");
        let numbers = newNumber.match(/\d+/g);
        let numberMin = String(Number(numbers[1]) / 1000000).replace(".", ",");
        numberSum.innerHTML = `до ${numberMin}млн. ₽`;
      } else {
        numberSum.innerHTML = numberOld.innerHTML;
      }
    }
    mediaQuery.addEventListener("change", Change);
    Change(mediaQuery);
  }
}

customElements.define("bank-terms", BankTerms, { extends: "div" });

const breadCrumb = document.querySelector(".breadcrumb");
class BreadCrumb extends HTMLElement {
  constructor() {
    super();

    const itemsBreadcrumb = document.querySelectorAll(".breadcrumb__item");

    for (let i = 0; i < itemsBreadcrumb.length - 1; i++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      svg.setAttribute("fill", "none");
      svg.setAttribute("viewbox", "0 0 5 6");
      svg.setAttribute("width", "5px");
      svg.setAttribute("height", "6px");

      path.setAttribute("d", "M1.35348 5.85351L4.20698 3.00001L1.35348 0.146515L0.646484 0.853515L2.79298 3.00001L0.646484 5.14651L1.35348 5.85351Z");
      path.setAttribute("fill", "#38424E");

      svg.appendChild(path);
      itemsBreadcrumb[i].append(svg);
    }
  }
}

customElements.define("bread-crumb", BreadCrumb, { extends: "nav" });

var $tabs = function (target) {
  var _elemTabs = typeof target === "string" ? document.querySelector(target) : target,
    _eventTabsShow,
    _showTab = function (tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute("href"));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector(".tabs__link_active");
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector(".tabs__pane_show");
      if (tabsLinkTarget === tabsLinkActive) {
        return;
      }
      if (tabsLinkActive !== null) {
        tabsLinkActive.classList.remove("tabs__link_active");
      }
      if (tabsPaneShow !== null) {
        tabsPaneShow.classList.remove("tabs__pane_show");
      }
      tabsLinkTarget.classList.add("tabs__link_active");
      tabsPaneTarget.classList.add("tabs__pane_show");
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function (tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll(".tabs__link");
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };

  _eventTabsShow = new CustomEvent("tab.show", { detail: _elemTabs });

  _elemTabs.addEventListener("click", function (e) {
    var target = e.target.closest(".tabs__link");
    if (!target) {
      return;
    }
    e.preventDefault();
    _showTab(target);
  });

  return {
    showTab: function (target) {
      _showTab(target);
    },
    switchTabTo: function (index) {
      _switchTabTo(index);
    },
  };
};

$tabs(".tabs");

const text = document.getElementById("link-spoiler");
const ele = document.getElementById("content-spoiler");
const mediaQuerySpoiler = window.matchMedia("(min-width: 576px)");

/// потом перепишу это!! Другой подход, не через display: none
function Spoiler() {
  if (ele.style.display == "flex") {
    ele.style.display = "none";
    text.innerHTML = "Показать больше";
  } else {
    ele.style.display = "flex";
    text.innerHTML = "Скрыть";
  }
}

text.onclick = Spoiler;

function handleTabletChange(e) {
  if (e.matches) {
    if (ele.style.display == "none") {
      ele.style.display = "flex";
    }
  } else {
    ele.style.display = "none";
    text.innerHTML = "Показать больше";
  }
}
mediaQuerySpoiler.addEventListener("change", handleTabletChange);
handleTabletChange(mediaQuerySpoiler);
//  /потом перепишу это!!

class BankProgram extends HTMLDivElement {
  constructor() {
    super();

    let btn = createNewObj("a", "bank-program__btn", "Программы");
    btn.setAttribute("href", "#");
    this.append(btn);
  }
}

customElements.define("bank-program", BankProgram, { extends: "div" });
