const sliderItems = document.querySelectorAll("[data-gallery-item]");
const dotsBox = document.querySelector("[data-dots-box]");
const sliderList = document.querySelector("[data-slider-list]");

const slideIn = (e) => {
  const btns = document.querySelectorAll("[data-number]");
  btns.forEach((btn) => btn.classList.remove("slider__dot--isActive"));
  e.target.classList.add("slider__dot--isActive");
  sliderItems[e.target.dataset.number].scrollIntoView({
    block: "nearest",
    behavior: "smooth",
  });
};

const everySecondItem = [...sliderItems].filter(
  (value, index, Arr) => index % 2 === 0
);

const everyThirdItem = [...sliderItems].filter(
  (value, index, Arr) => index % 3 === 0
);

const createDotButtons = (arr) => {
  dotsBox.innerHTML = "";
  arr.forEach((item) => {
    dotsBox.insertAdjacentHTML(
      "beforeend",
      `<button class="slider__dot" data-number=${item.dataset.galleryItem}></button>`
    );
  });
  const firstDotBtn = document.querySelector("[data-number]");
  firstDotBtn.classList.add("slider__dot--isActive");
};

const addEventListenerToBtns = () => {
  const actualBtn = document.querySelectorAll("[data-number]");
  actualBtn.forEach((btn) => btn.addEventListener("click", slideIn));
};

const checkViewportWidth = () => {
  if (screen.width < 576) {
    createDotButtons(sliderItems);
    addEventListenerToBtns();
  } else if (screen.width > 576 && screen.width < 768) {
    createDotButtons(everySecondItem);
    addEventListenerToBtns();
  } else if (screen.width > 768) {
    createDotButtons(everyThirdItem);
    addEventListenerToBtns();
  }
};

checkViewportWidth();

window.addEventListener("resize", checkViewportWidth);

const fullImgBox = document.querySelector("[data-full-img-box]");
const fullImg = document.querySelector("[data-full-img]");
const closeBtn = document.querySelector("[data-close-fullImg-button]");
const bodyPage = document.querySelector("[data-body]");

const takeImageSrc = (e) => {
  const clickedImgSrc = e.target.children[0].src;
  fullImg.src = clickedImgSrc;
  fullImgBox.classList.add("gallery__fullImgBox--isVisible");
  bodyPage.classList.add("stop-scrolling");
};

const closeFullImg = (e) => {
  if (!(e.target.tagName == "IMG")) {
    fullImgBox.classList.remove("gallery__fullImgBox--isVisible");
    bodyPage.classList.remove("stop-scrolling");
  }
};

sliderItems.forEach((item) =>
  item.addEventListener("click", (e) => takeImageSrc(e))
);

fullImgBox.addEventListener("click", (e) => closeFullImg(e));
closeBtn.addEventListener("click", (e) => closeFullImg(e));
