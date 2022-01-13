import Flickity from "flickity";
import AsNavFor from "flickity-as-nav-for";

export function flickity() {
  const asNavFor = document.querySelector(".carousel-main");
  const main = new Flickity(asNavFor, {});
  const nav = new Flickity(".carousel-nav", {
    asNavFor: asNavFor,
    contain: true,
    pageDots: false,
  });
}
