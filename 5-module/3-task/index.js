function initCarousel() {
  // ваш код...

  let carousel = document.querySelector('.carousel');
  let carouselInner = carousel.querySelector('.carousel__inner');
  let carouselSlides = carousel.querySelectorAll('.carousel__slide');
  let carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');
  let carouselArrowRight = carousel.querySelector('.carousel__arrow_right');

  let offset = 0;
  let getSlideWidth = carousel.offsetWidth;
  let getSlidesWidth = 0;

  carouselSlides.forEach(item => {
    item.style.width = `${getSlideWidth}px`;
    getSlidesWidth += item.offsetWidth;
  });

  carouselArrowRight.addEventListener('click', () => {
    if (offset != getSlidesWidth - getSlideWidth) offset += getSlideWidth;
    if (offset == getSlidesWidth - getSlideWidth) carouselArrowRight.style.display = 'none';
    if (offset > 0) carouselArrowLeft.style.display = '';;
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });

  carouselArrowLeft.style.display = 'none';

  carouselArrowLeft.addEventListener('click', () => {
    if (offset < getSlidesWidth) carouselArrowRight.style.display = '';
    if (offset != 0) offset -= getSlideWidth;
    if (offset == 0) carouselArrowLeft.style.display = 'none';
    carouselInner.style.transform = `translateX(-${offset}px)`;
  });

}
