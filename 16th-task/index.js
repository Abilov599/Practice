let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let reset = document.querySelector(".reset");
let box = document.querySelector(".box");

btn.addEventListener("click", function () {
  if (input.value == "") {
    alert("Please Enter a Task");
  } else {
    ///// text
    let p = document.createElement("p");
    p.innerText = input.value;
    box.appendChild(p);
    input.value = "";
    /////
    let del = document.createElement("button");
    del.className = "edit";
    del.innerText = "delete";
    p.appendChild(del);
    /////
    let edit = document.createElement("button");
    edit.addEventListener("click", function () {
      prompt;
    });
    //////
    reset.addEventListener("click", function () {
      box.innerHTML = "";
    });
    ////
    del.addEventListener("click", function () {
      this.parentNode.remove();
    });
  }
});
