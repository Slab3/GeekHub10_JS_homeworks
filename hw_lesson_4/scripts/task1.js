// const init = function(){
//     let items = document.querySelectorAll('img');
//     for (let i = 0; i < items.length; i++){
//         items[i].style.background = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
//     }
//
// };
// init();



//it's workiinggggggggg -=---------------====================---------------------=======-=========-=-=-=-
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

    /* We go through each slide in a loop to */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

