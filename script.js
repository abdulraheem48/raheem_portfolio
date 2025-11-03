// ========================================
// ===== NAVIGATION SMOOTH SCROLL =====
// ========================================
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ========================================
// ===== SKILLS FLIP ANIMATION =====
// ========================================
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('flipped');
  });
  item.addEventListener('mouseleave', () => {
    item.classList.remove('flipped');
  });
});

// Intersection Observer for skill reveal animation
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 120);
    }
  });
}, { threshold: 0.2 });

skillItems.forEach(item => skillObserver.observe(item));


// ========================================
// ===== EXPERIENCE CARD ANIMATION =====
// ========================================
const expCards = document.querySelectorAll('.exp-card');

const expObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
    }
  });
}, { threshold: 0.2 });

expCards.forEach(card => expObserver.observe(card));


// ========================================
// ===== PROJECT CARD ANIMATION =====
// ========================================
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));


// ========================================
// ===== BUTTON GLOW EFFECT =====
// ========================================
const glowButtons = document.querySelectorAll('.btn, .navbar a');

glowButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('glow');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('glow');
  });
});

// ========================================
// ===== OPTIONAL: AUTO FLIP FOR SKILLS =====
// (If you want skill cards to flip automatically)
// ========================================
let autoFlipIndex = 0;
setInterval(() => {
  skillItems.forEach((item, index) => {
    if (index === autoFlipIndex) {
      item.classList.add('flipped');
      setTimeout(() => item.classList.remove('flipped'), 2000);
    }
  });
  autoFlipIndex = (autoFlipIndex + 1) % skillItems.length;
}, 2500);
