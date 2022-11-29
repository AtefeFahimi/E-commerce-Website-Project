//Navbar for smaller page size
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
//////////////

//Cart Page

// const removeCartItemButtons = document.getElementsByClassName("btn-danger");
// console.log(removeCartItemButtons);

// for (let i = 0; i < removeCartItemButtons.length; i++) {
//   let removeButton = removeCartItemButtons[i];
//   removeButton.addEventListener("click", function (event) {
//     let buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//   });
// }
let carts = document.querySelectorAll(".btn-danger");
for (let i = 0; i < carts.length; i++) {}
