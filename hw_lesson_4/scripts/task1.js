/* set indexSlide */
let slideIndex = 1;
showSlides(slideIndex);

/* nextSlide */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* previousSlide */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* currentSlide */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* next/prev slide moving */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

