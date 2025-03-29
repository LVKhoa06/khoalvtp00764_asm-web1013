// Partner slider START
let slider;
let slides;
let totalSlides;
let slideWidth;
let index = 0;
let slideInterval;

window.onload = function () {
    slider = document.getElementById('partner-slider');
    slides = document.querySelectorAll('.partner-slider-slide');
    totalSlides = slides.length / 2;
    slideWidth = slides[0].clientWidth;
}

function updateSlider() {
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    index = index + 2;
    slider.style.transition = 'transform 0.5s linear';
    updateSlider();

    if (index > totalSlides) {
        setTimeout(() => {
            slider.style.transition = 'none';
            index = 0;
            updateSlider();
        }, 500);
    }
}

function prevSlide() {
    if (index <= 0) {
        index = totalSlides;
        slider.style.transition = 'none';
        updateSlider();
    }
    setTimeout(() => {
        index = index - 2;
        slider.style.transition = 'transform 0.5s linear';
        updateSlider();
    }, 10);
}

function restartInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}
slideInterval = setInterval(nextSlide, 5000);
// Partner slider END