
const slides = document.querySelectorAll(".issue-slide");
const dots = document.querySelectorAll(".issue-dots button");

if (slides.length > 0 && dots.length === slides.length) {
  let current = 0;

  function showSlide(index) {
    current = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  setInterval(() => {
    showSlide((current + 1) % slides.length);
  }, 4000);
}
// INTERACTION 1: MOBILE MENU 
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute ("aria-label", isOpen ? "close navigation" : "open navigation");
    menuButton.textContent = isOpen ? "X" : "☰";

  }); 
}
// INTERACTION 2: SMART NAVIGATION 
const floatingNav = document.querySelector(".hyper-nav");
if (floatingNav) {
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const menuIsOpen = navLinks?.classList.contains("open");

    if (currentScrollY < 80 || menuIsOpen) {
      floatingNav.classList.remove("nav-hidden");
    } else if (currentScrollY > lastScrollY + 3) {
      floatingNav.classList.add("nav-hidden");
    } else if (currentScrollY < lastScrollY - 3) {
      floatingNav.classList.remove("nav-hidden");
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });
}
