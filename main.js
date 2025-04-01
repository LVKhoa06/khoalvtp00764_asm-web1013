// Partner slider START
let slider;
let slides;
let totalSlides;
let slideWidth;
let index = 0;
let slideInterval;
let btnOnTop;
let header;


window.onload = function () {
    slider = document.getElementById('partner-slider');
    slides = document.querySelectorAll('.partner-slider-slide');
    btnOnTop = document.getElementById("btn-ontop");
    totalSlides = slides.length / 2;
    slideWidth = slides[0].clientWidth;
    header = document.querySelector(".header-bottom-fixed");
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


// Scroll event START
function backToTop() {
    window.scrollTo({ top: 0 });
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 170) {
        btnOnTop.style.display = "flex";

        header.style.display = "flex";
        header.style.alignItem = "center";
        header.style.position = "fixed";
        header.style.top = 0;
        header.style.left = 0;
        header.style.height = "77px";
        header.style.width = "100%";
        header.style.background = "linear-gradient(to bottom, rgb(255, 105, 0), rgba(255 255, 255, 1))";


    }
    else {
        btnOnTop.style.display = "none";

        header.style.background = "transparent";
        header.style.display = "block";
        header.style.height = "auto";
        header.style.position = "relative";
    }
});
// Scroll envent END

// Hide | Show START
function hide(id) {
    const elm = document.getElementById(id);
    elm.style.display = "none";
}

function show(id) {
    const elm = document.getElementById(id);
    elm.style.display = "block";
}

// Hide | Show END

