let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");

const faq1 = document.querySelector(".faq1");
const faq2 = document.querySelector(".faq2");
const faq3 = document.querySelector(".faq3");

b1.addEventListener("click", () => {
    faq1.classList.toggle("visible");
});

b2.addEventListener("click", () => {
    faq2.classList.toggle("visible");
});

b3.addEventListener("click", () => {
    faq3.classList.toggle("visible");
});
