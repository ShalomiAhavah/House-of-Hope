
//slider = slideshow
//currentImage = currentSlide

const slideshow = document.getElementById("slideshow");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// const imageWidth = document.querySelector('.slideshow-item').clientWidth;
const imageWidth = 75;
let currentSlide = 0;

let length = slideshow.children.length;
console.log(length);
document.querySelector("#slideshow").style.width = length * imageWidth + "vw";


next.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide > slideshow.children.length - 1) {
        currentSlide = 0;
    }
    updateSlideshow();
});

prev.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slideshow.children.length - 1;
    }
    updateSlideshow();
});

function updateSlideshow() {
    var translateValue = -currentSlide * imageWidth;
    slideshow.style.transform = `translateX(${translateValue}vw)`;
}



//Credits
console.log(
    "Next/Prev Icon credits:https://www.flaticon.com/authors/freepik"
)

