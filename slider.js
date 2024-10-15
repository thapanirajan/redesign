const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides img');
const prevNav = document.createElement('div');
const nextNav = document.createElement('div');

prevNav.className = 'slider-nav prev';
nextNav.className = 'slider-nav next';

slider.appendChild(prevNav);
slider.appendChild(nextNav);

let currentSlide = 0;

prevNav.addEventListener('click', () => {
    currentSlide--;
    updateSlider();
});

nextNav.addEventListener('click', () => {
    currentSlide++;
    updateSlider();
});

function updateSlider() {
    const translateX = currentSlide * -100 + '%';
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${translateX})`;
    });
}

updateSlider();