import "./slider.scss";

document.addEventListener("DOMContentLoaded", function () {
  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const itemWidth = 100;
  const items = document.querySelectorAll(".slider-item");
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
