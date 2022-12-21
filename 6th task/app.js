let sizes = document.querySelectorAll(".size");
let addToCart = document.querySelector(".btn");
let see = document.querySelector(".see");
let colors = document.querySelectorAll(".co");

let red = document.querySelector(".red");
let blue = document.querySelector(".blue");

let data = JSON.parse(localStorage.getItem("cart")) || [];

let Name = "Nike Air";
let selectedSize;
let selectedColor;

sizes.forEach((size) => {
  size.addEventListener("click", (e) => {
    selectedSize = e.target.innerText;
  });
});

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    selectedColor = e.target.classList[0];
  });
});
addToCart.addEventListener("click", () => {
  data.push({ Name, selectedSize, selectedColor });
  localStorage.setItem("cart", JSON.stringify(data));
});

see.addEventListener("click", () => {
  console.log(data);
});

red.addEventListener("click", () => {
  blue.style.opacity = "1";
  red.style.opacity = "0.5";
});

blue.addEventListener("click", () => {
  blue.style.opacity = "0.5";
  red.style.opacity = "1";
});
