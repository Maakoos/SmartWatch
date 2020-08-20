const percentagesItem = document.querySelectorAll("[data-percentages]");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const percentagesValue = parseInt(entry.target.dataset.percentages) / 100;
      entry.target.style.transform = `scaleX(${percentagesValue})`;
    }
  });
}, options);

percentagesItem.forEach((item) => {
  observer.observe(item);
});
