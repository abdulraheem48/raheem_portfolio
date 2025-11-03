// ===== SMOOTH NAVIGATION ACTIVE HIGHLIGHT =====

// Select all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Function to highlight active section in nav
window.addEventListener('scroll', () => {
  let current = '';
  
  // Get all sections
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  // Loop through sections to find current
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset to adjust highlight
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // Add active class to matching nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ===== SMOOTH SCROLL ON NAV CLICK =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default jump
    const targetId = link.getAttribute('href').substring(1); // Get section id
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
  });
});

// ===== OPTIONAL: SMALL FADE-IN ON SCROLL =====

// Select all boxes to animate
const boxes = document.querySelectorAll('.box');

// Observe when elements enter view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

// Apply observer to each box
boxes.forEach(box => observer.observe(box));
