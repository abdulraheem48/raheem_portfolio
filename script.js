// ========================================
// ===== SECTION SHOW / HIDE FUNCTION =====
// ========================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

function showSection(targetId) {
  sections.forEach(section => {
    if (section.id === targetId) {
      section.style.display = "block";
      setTimeout(() => section.classList.add("visible"), 50);
    } else {
      section.style.display = "none";
      section.classList.remove("visible");
    }
  });

  // Highlight active nav link
  navLinks.forEach(link => link.classList.remove("active"));
  const activeLink = document.querySelector(`.navbar a[href="#${targetId}"]`);
  if (activeLink) activeLink.classList.add("active");

  // 🔹 Trigger About typing when "About" section is shown
  if (targetId === "about") {
    startAboutTyping();
  }
}

// Initialize: show only home on first load
showSection("home");

// Navbar link click behavior
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    showSection(targetId);
  });
});

// ========================================
// ===== SMOOTH SCROLL FOR NAVIGATION =====
// ========================================
document.querySelectorAll(".navbar a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) section.scrollIntoView({ behavior: "smooth" });
  });
});

// ========================================
// ===== SKILLS FLIP ANIMATION =====
// ========================================
const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach(item => {
  item.addEventListener("mouseenter", () => item.classList.add("flipped"));
  item.addEventListener("mouseleave", () => item.classList.remove("flipped"));
});

// Intersection Observer for skill reveal animation
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 120);
    }
  });
}, { threshold: 0.2 });

skillItems.forEach(item => skillObserver.observe(item));

// ========================================
// ===== EXPERIENCE CARD ANIMATION =====
// ========================================
const expCards = document.querySelectorAll(".exp-card");

const expObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 200);
    }
  });
}, { threshold: 0.2 });

expCards.forEach(card => expObserver.observe(card));

// ========================================
// ===== PROJECT CARD ANIMATION =====
// ========================================
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 200);
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));

// ========================================
// ===== BUTTON GLOW EFFECT =====
// ========================================
const glowButtons = document.querySelectorAll(".btn, .navbar a");

glowButtons.forEach(button => {
  button.addEventListener("mouseenter", () => button.classList.add("glow"));
  button.addEventListener("mouseleave", () => button.classList.remove("glow"));
});

// ========================================
// ===== AUTO FLIP FOR SKILLS =====
// ========================================
let autoFlipIndex = 0;
setInterval(() => {
  skillItems.forEach((item, index) => {
    if (index === autoFlipIndex) {
      item.classList.add("flipped");
      setTimeout(() => item.classList.remove("flipped"), 2000);
    }
  });
  autoFlipIndex = (autoFlipIndex + 1) % skillItems.length;
}, 2500);

// ========================================
// ===== TALK TO ME BUTTON FUNCTION =====
// ========================================
const talkBtn = document.getElementById("talkBtn");
if (talkBtn) {
  talkBtn.addEventListener("click", e => {
    e.preventDefault();
    showSection("contact");
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
}

// ========================================
// ===== MOBILE MENU TOGGLE (with Auto-Close)
// ========================================
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const mobileNavLinks = document.querySelectorAll(".navbar a");

if (menuToggle) {
  // Open/close menu when clicking hamburger icon
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("bx-menu");
    icon.classList.toggle("bx-x");
  });

  // Auto-close menu when any nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");

        // Reset icon to hamburger (☰)
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("bx-x");
        icon.classList.add("bx-menu");
      }
    });
  });
}


// ========================================
// ===== ROLE TYPING ANIMATION (HOME) =====
// ========================================
const roles = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (!typingElement) return;
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 300);
  }
}

// Blinking cursor
setInterval(() => {
  if (cursor) cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) type();
});

// ========================================
// ===== ABOUT ME TYPING EFFECT =========
// ========================================
let typingStarted = false;

function startAboutTyping() {
  const aboutTyping = document.getElementById("about-typing");
  if (!aboutTyping || typingStarted) return;

  const fullText = `📅 Nov 2025
Passionate Data Engineer with hands-on experience in building data pipelines, cloud data solutions, and analytics dashboards.
Skilled in Azure, AWS, Databricks, PySpark, Airflow, and Snowflake.
Enthusiastic about transforming raw data into meaningful insights.`;

  aboutTyping.textContent = "";
  typingStarted = true;

  let i = 0;
  function typeText() {
    if (i < fullText.length) {
      aboutTyping.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeText, 30);
    }
  }
  typeText();
}
