const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    allowSlideNext: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  });