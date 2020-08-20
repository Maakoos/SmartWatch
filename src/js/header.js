const header = document.querySelector("[data-header]");

let prevScrollPosition = window.scrollY;

const showOrHideHeader = () => {
  const currentScrollPostion = window.scrollY;
  if (prevScrollPosition > currentScrollPostion) {
    header.classList.add("header--show");
  } else {
    header.classList.remove("header--show");
  }
  prevScrollPosition = currentScrollPostion;
};

window.addEventListener("scroll", showOrHideHeader);
