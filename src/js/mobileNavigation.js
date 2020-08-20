const hamburgerBtn = document.querySelector("[data-hamburgerBtn]");
const navigation = document.querySelector("[data-nav]");
const mobileNavItems = document.querySelectorAll("[data-mobile-nav]");

const toggleIsActive = () => {
  hamburgerBtn.classList.toggle("hamburgerBtn--isOpen");
  navigation.classList.toggle("navigation--isOpen");
};

const toggleActiveClass = (e) => {
  mobileNavItems.forEach((item) =>
    item.classList.remove("navigation__link--active")
  );
  e.target.classList.add("navigation__link--active");
  toggleIsActive();
};

hamburgerBtn.addEventListener("click", toggleIsActive);

mobileNavItems.forEach((item) =>
  item.addEventListener("click", (e) => toggleActiveClass(e))
);
