import Swiper, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export function initSwiper() {
  const width = document.documentElement.clientWidth;

  if (width <= 768) {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      loop: true,
      observer: true,
      slidesPerView: "auto",
      speed: 400,
      spaceBetween: 16,
      effect: "slide",
    });
  }

  if (width >= 768) {
    document.querySelector(".swiper").classList.remove("swiper");
    document
      .querySelector(".swiper-wrapper")
      .classList.remove("swiper-wrapper");
    document.querySelector(".swiper-pagination").remove();
  }
}
