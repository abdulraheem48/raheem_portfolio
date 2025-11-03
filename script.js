// Select all navigation links
document.querySelectorAll('.navbar a').forEach(link => { // Finds each link inside navbar
  link.addEventListener('click', function() { // Adds click event to each link
    document.querySelectorAll('.navbar a').forEach(nav => nav.classList.remove('active')); // Removes 'active' class from all links
    this.classList.add('active'); // Adds 'active' class to the clicked link
  }); // End of click listener
}); // End of loop over navbar links

// Typing animation setup using Typed.js
var typed = new Typed('.typed-text', { // Targets the span with class 'typed-text'
  strings: ['Data Engineer', 'Cloud Engineer', 'Big Data Engineer'], // List of words to type
  typeSpeed: 80, // Speed of typing (milliseconds per character)
  backSpeed: 50, // Speed when deleting
  backDelay: 1200, // Pause before deleting text
  loop: true // Keeps repeating the animation forever
}); // End of Typed.js initialization
