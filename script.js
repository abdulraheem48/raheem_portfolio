// Simple smooth scroll and section highlight effect
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.navbar a').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
