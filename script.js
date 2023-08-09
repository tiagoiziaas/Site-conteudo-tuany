const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides[index].classList.add("active");
}

function startSlideShow() {
  slides[index].classList.add("active");
  setInterval(nextSlide, 3000); // Altere o valor em milissegundos para ajustar a velocidade do slide
}

startSlideShow();
