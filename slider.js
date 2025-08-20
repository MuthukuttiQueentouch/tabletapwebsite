const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.slide-left');
const rightBtn = document.querySelector('.slide-right');

let currentIndex = 0;

function updateSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');

  // center the active slide
  const slideWidth = slides[0].offsetWidth + 20; // 20 = gap
  const wrapperWidth = slidesWrapper.offsetWidth;
  const offset = (slideWidth * currentIndex) - (wrapperWidth/2 - slideWidth/2);
  slidesWrapper.style.transform = `translateX(-${offset}px)`;
}

leftBtn.addEventListener('click', () => {
  if(currentIndex > 0) currentIndex--;
  updateSlides();
});

rightBtn.addEventListener('click', () => {
  if(currentIndex < slides.length - 1) currentIndex++;
  updateSlides();
});

// initial center
updateSlides();
