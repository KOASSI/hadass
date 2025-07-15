// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('.submit-btn');
  const originalContent = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  submitBtn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.disabled = false;
      contactForm.reset();
    }, 2000);
  }, 1500);
});

// Floating labels functionality
document.querySelectorAll('.form-group input, .form-group textarea').forEach(element => {
  element.addEventListener('focus', function() {
    this.nextElementSibling.style.top = '-0.5rem';
    this.nextElementSibling.style.fontSize = '0.8rem';
    this.nextElementSibling.style.color = 'var(--primary)';
  });
  
  element.addEventListener('blur', function() {
    if (this.value === '') {
      this.nextElementSibling.style.top = '1rem';
      this.nextElementSibling.style.fontSize = '1rem';
      this.nextElementSibling.style.color = 'var(--dark)';
    }
  });
});