let addedMovs = document.querySelector(".movies");
let input = document.querySelector("input");
let bttnsDiv = document.querySelector(".buttons");
let delBtn = document.querySelector(".delBtn");
let editBtn = document.querySelector(".editBtn");
let li;

let movsArr =
  JSON.parse(localStorage.getItem("movsData")) == null
    ? []
    : JSON.parse(localStorage.getItem("movsData"));

let createMov = function () {
  if (input.value === "") {
    alert("Please enter a movie");
  } else {
    // movsArr = []
    movsArr.push(input.value);
    localStorage.setItem("movsData", JSON.stringify(movsArr));
  }
};

window.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    createMov();
    li = document.createElement("li");
    movsArr.forEach((element) => {
      li.innerText = element;
      addedMovs.appendChild(li);
      input.value = "";
    });
  }
});

let delMov = function () {
  localStorage.removeItem("movsData");
  addedMovs.innerHTML = "";
};

delBtn.addEventListener("click", delMov);

// let editMov = function () {
//     li.innerText = input.value;
//     li.innerText = "";
//     let edittt = document.createElement("button");
//     edittt.innerText = "Editttt";
//     bttnsDiv.appendChild(edittt);
//     edittt.addEventListener("click", function () {
//       input.value;
//     }

// }
