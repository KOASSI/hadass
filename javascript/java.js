// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let carouselInterval;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}vw)`;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Auto-advance carousel (ralenti à 6 secondes au lieu de 5)
function startCarousel() {
  carouselInterval = setInterval(showNextImage, 6000);
}
startCarousel();

// Pause auto-advance on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
carousel.addEventListener('mouseleave', startCarousel);

// Scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

scrollToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Language toggle functionality
const languageToggle = document.createElement('button');
languageToggle.textContent = 'EN/FR';
languageToggle.style.position = 'fixed';
languageToggle.style.bottom = '20px';
languageToggle.style.left = '20px';
languageToggle.style.zIndex = '1000';
languageToggle.style.padding = '10px 15px';
languageToggle.style.background = 'var(--primary)';
languageToggle.style.color = 'white';
languageToggle.style.border = '1px solid var(--secondary)';
languageToggle.style.borderRadius = '5px';
languageToggle.style.cursor = 'pointer';
languageToggle.style.fontWeight = '600';

languageToggle.addEventListener('click', () => {
  const frElements = document.querySelectorAll('.fr');
  const enElements = document.querySelectorAll('.en');
  
  frElements.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  });
  
  enElements.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  });
});

document.body.appendChild(languageToggle);

// Menu burger functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});