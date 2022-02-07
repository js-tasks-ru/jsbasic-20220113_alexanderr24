function initCarousel() {
  // ваш код...

  let carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let carouselSlides = carousel.querySelectorAll('.carousel__slide');
  let carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  let carouselArrowRight = carousel.querySelector('.carousel__arrow_right');

  let offset = 0;
  let widthInner = carouselInner.offsetWidth * Array.from(carouselSlides).length;
  let widthSlide = carouselInner.offsetWidth;

  function hideArrows(arrow, display) {
    arrow.style.display = display;
  }

  carouselArrowRight.addEventListener('click', () => {
    if (offset != widthInner - widthSlide) offset += widthSlide;
    if (offset == widthInner - widthSlide) hideArrows(carouselArrowRight, 'none');
    if (offset > 0) hideArrows(carouselArrowLeft, '');
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });

  hideArrows(carouselArrowLeft, 'none');

  carouselArrowLeft.addEventListener('click', () => {
    if (offset != 0) offset -= widthSlide;
    if (offset < widthInner) hideArrows(carouselArrowRight, '');
    if (offset == 0) hideArrows(carouselArrowLeft, 'none');
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });

}
