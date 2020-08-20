const testimonialItems = [
  {
    imgSrc: "./public/customers/customer1.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedsapien leo, iaculis rutrum lacus sed, fermentum tempor odio.Integer in ipsum eleifend ipsum mattis pulvinar at vitae magna.",
    name: "Maggie Wilson",
  },
  {
    imgSrc: "./public/customers/customer2.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedsapien leo, iaculis rutrum lacus sed",
    name: "Ella Jonson",
  },
];

const prevBtn = document.querySelector("[data-prev-button]");
const nextBtn = document.querySelector("[data-next-button]");

const customerImg = document.querySelector("[data-customer-img]");
const customerQuote = document.querySelector("[data-customer-quote]");
const customerName = document.querySelector("[data-customer-name]");

let testimonialIndex = 0;
const animatedElements = [customerImg, customerQuote, customerName];

const removeAnimationClass = () => {
  animatedElements.forEach((element) =>
    element.classList.add(`${element.classList[0]}--fadeIn`)
  );
  nextBtn.setAttribute("disabled", true);
  prevBtn.setAttribute("disabled", true);
  setTimeout(() => {
    animatedElements.forEach((element) =>
      element.classList.remove(`${element.classList[0]}--fadeIn`)
    );
    nextBtn.removeAttribute("disabled");
    prevBtn.removeAttribute("disabled");
  }, 1200);
};

const changeContentInTestimonial = (index) => {
  customerImg.src = testimonialItems[index].imgSrc;
  customerQuote.textContent = testimonialItems[index].quote;
  customerName.textContent = testimonialItems[index].name;
};

const nextTestimonials = () => {
  if (testimonialIndex === testimonialItems.length - 1) {
    testimonialIndex = -1;
  }
  testimonialIndex++;
  changeContentInTestimonial(testimonialIndex);
  removeAnimationClass();
};

const prevTestimonials = () => {
  if (testimonialIndex === 0) {
    testimonialIndex = testimonialItems.length;
  }
  testimonialIndex--;
  changeContentInTestimonial(testimonialIndex);
  removeAnimationClass();
};

nextBtn.addEventListener("click", nextTestimonials);
prevBtn.addEventListener("click", prevTestimonials);
