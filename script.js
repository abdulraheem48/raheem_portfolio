// Navbar link active toggle on click
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.navbar a').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Typing animation using Typed.js
var typed = new Typed('.typed-text', {
  strings: [
    'Data Engineer',
    'Cloud Engineer',
    'Big Data Engineer'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  loop: true
});

