var mvswiper = new Swiper('.mvswiper', {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 7000,
    waitForTransition: false,
		disableOnInteraction: false
  },
  speed: 800,
  effect: 'slide',
  fadeEffect: {
    crossFade: true
  },
		navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});