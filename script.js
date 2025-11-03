// Typing animation
const text = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let index = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing");

function type() {
  if (charIndex < text[index].length) {
    typingSpan.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingSpan) type();
});

// Smooth scroll behavior
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
