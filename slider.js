var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,        // show 3 slides
  spaceBetween: 30,        // gap between slides
  centeredSlides: true,    // center active slide
  loop: true,              // infinite loop
  grabCursor: true,        // hand cursor
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
