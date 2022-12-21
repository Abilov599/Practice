let formSignIn = document.querySelector(".signIn");
let welcomeBox = document.querySelector(".welcomeBox");
let signInUserName = document.querySelector("#signInUserName");
let signInPassword = document.querySelector("#signInPassword");

let userRegData =
  JSON.parse(localStorage.getItem("userData")) == null
    ? []
    : JSON.parse(localStorage.getItem("userData"));

let SingUp = document.querySelector(".SingUp");
let SignIn = document.querySelector(".SignIn");

let signInBox = document.querySelector(".signInBox");
signInBox.style.display = "none";

let singUpBox = document.querySelector(".singUpBox");
singUpBox.style.display = "none";

SingUp.addEventListener("click", function () {
  singUpBox.style.display = "block";
  SingUp.style.display = "none";
  SignIn.style.display = "none";
});

SignIn.addEventListener("click", function () {
  signInBox.style.display = "block";
  SingUp.style.display = "none";
  SignIn.style.display = "none";
});

formSignIn.addEventListener("submit", function (e) {
  e.preventDefault();
  if (signInUserName.value === "" || signInPassword.value === "") {
    alert("Input value is empty");
  } else if (
    signInUserName.value !== userRegData.userObj.username &&
    signInPassword.value !== userRegData.userObj.password
  ) {
  }
});

let formSingUp = document.querySelector(".singUp");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let city = document.querySelector("#city");
let singUp = document.querySelector("#singUp");

formSingUp.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    username.value === "" ||
    password.value === "" ||
    email.value === "" ||
    city.value === ""
  ) {
    alert("Input value is empty");
  } else {

    let userObj = {
      username: "",
      password: "",
      email: "",
      city: "",
    };

    userObj.username = username.value;
    userObj.password = password.value;
    userObj.email = email.value;
    userObj.city = city.value;

    userRegData.push(userObj);

    localStorage.setItem("userData", JSON.stringify(userRegData));
  }
});
