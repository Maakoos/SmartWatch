const gallerySection = document.querySelector("[data-gallery-section]");

const images = document.querySelectorAll("[data-img-flip]");

const videoSection = document.querySelector("[data-video-section]");

const colorItems = document.querySelectorAll("[data-color-item]");

const testimonialsSection = document.querySelector(
  "[data-testimonials-section]"
);

const mainHeading = document.querySelector("[data-main-heading]");

const clock = document.querySelector("[data-clock]");

const animationItems = [
  clock,
  gallerySection,
  ...images,
  videoSection,
  testimonialsSection,
  ...colorItems,
  mainHeading,
];

const options = {
  root: null,
  threshold: 0.4,
  rootMargin: "0px",
};

let animationDelay = 0;
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList[0] === "chooseColor__item") {
        entry.target.style.animationDelay = `${animationDelay}s`;
        animationDelay += 0.5;
      }
      entry.target.classList.add(`${entry.target.classList[0]}--anim`);
    }
  });
}, options);

animationItems.forEach((element) => {
  observer.observe(element);
});
