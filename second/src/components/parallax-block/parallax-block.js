import "./parallax-block.scss";

const parallaxBlock = document.querySelector(".parallax-block__container");
function parallax(event) {
  parallaxBlock.style.transform = `translateX(${event.clientX / 50}px) translateY(${event.clientY / 50}px)`;
}

document.addEventListener("mousemove", parallax);
