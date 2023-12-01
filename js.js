let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 4000);

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = "block";
  slideInterval = setInterval(() => {
    plusSlides(0);
  }, 5000);
}

showSlides(slideIndex);
