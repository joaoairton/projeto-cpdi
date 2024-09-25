let navBar = document.querySelector("#header");

//Função que muda a cor do menu ao rolar a página
document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

//Programação do carrossel
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Função para atualizar o carrossel
  function updateCarousel() {
    const carouselImages = document.querySelector(".carousel-images");
    const offset = currentSlide * -100;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  // Função para avançar o slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  // Função para retroceder o slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Evento de clique para os botões
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Rotação automática do carrossel a cada 10 segundos
  setInterval(nextSlide, 5000); // 5000 ms = 5 segundos
});
