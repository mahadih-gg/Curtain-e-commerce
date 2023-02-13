
// ============== Home sliders =========== //
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



// ============== Product details sliders =========== //
let productDetailsSliderThumbSlider = new Swiper(
  ".productDetailsSliderThumbSlider",
  {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  }
);
let productDetailsSlider = new Swiper(".productDetailsSlider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productDetailsSliderThumbSlider,
  },
});