const navItems = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("[data-section]");
const pageBox = document.querySelector("[data-page]");

const setActiveClass = (index) => {
  navItems.forEach((item) => item.classList.remove("mainNav__link--active"));
  navItems[index].classList.add("mainNav__link--active");
};

let sectionIndex = 1;
let isThrottled = false;

const horizontalScroll = (e) => {
  if (isThrottled) return;
  isThrottled = true;

  setTimeout(() => {
    isThrottled = false;
  }, 1000);

  if (sectionIndex === 0) {
    sectionIndex = 1;
  } else if (sectionIndex === sections.length) {
    sectionIndex = sections.length - 1;
  }
  if (e.deltaY > 0) {
    sections[sectionIndex].scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
    setActiveClass(sectionIndex);
    sectionIndex++;
  } else if (e.deltaY < 0) {
    sectionIndex--;
    sections[sectionIndex].scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
    setActiveClass(sectionIndex);
  }
};

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      const { inlineSize } = entry.contentBoxSize[0];
      if (inlineSize > 1200) {
        pageBox.addEventListener("wheel", horizontalScroll);
      } else {
        pageBox.removeEventListener("wheel", horizontalScroll);
      }
    }
  }
});

resizeObserver.observe(pageBox);

const clickScroll = (e) => {
  const sectionNumber = e.target.dataset.navLink;

  const actualSection = [...sections].filter(
    (section) => section.dataset.section === sectionNumber
  );

  navItems.forEach((item) => item.classList.remove("mainNav__link--active"));
  e.target.classList.add("mainNav__link--active");

  const distanceFromLeft = actualSection[0].offsetLeft;
  pageBox.scrollTo(distanceFromLeft, 0);
  sectionIndex = parseInt(sectionNumber);
};

navItems.forEach((item) =>
  item.addEventListener("click", (e) => clickScroll(e))
);
