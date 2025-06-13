const track = document.getElementById('sliderTrack');
const cards = document.querySelectorAll('.card-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.carousel-dot');
const cardsPerSlide = 3;
const totalSlides = Math.ceil(cards.length / cardsPerSlide);
const slideWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
let currentIndex = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * (slideWidth) * cardsPerSlide}px)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });

  prevBtn.classList.toggle('blurred', currentIndex === 0);
  nextBtn.classList.toggle('blurred', currentIndex === totalSlides - 1);
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentIndex = idx;
    updateSlider();
  });
});

window.addEventListener('resize', () => {
  updateSlider(); 
});

updateSlider();