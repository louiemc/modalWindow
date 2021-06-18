"use strict";
// Select the elements we need and store the selections into variables - obv better than selecting the same elements over and over again
// need to manipulate the modal, close and show, overlay
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// const btnsShowModal = document.querySelector(".show-modal"); // whenever using a querySelector with a selector with multiple elements, only the first one will get selected
const btnsShowModal = document.querySelectorAll(".show-modal"); // this gives us a NodeList

// you'll see the NodeList - not an array! (can loop through it)
// console.log(btnsShowModal);

// loop through the NodeList and doo something with the show modal btns
for (let i = 0; i < btnsShowModal.length; i++) {
  // console.log(btnsShowModal[i]);
  // console.log(btnsShowModal[i].textContent);

  // react to a click event on each button
  // btnsShowModal[i].addEventListener("click", function () {
  //   console.log(`${btnsShowModal[i].textContent} was clicked`); // test to log to the console the button that was clicked

  //   // display the modal, which is in the html -- it has the hidden class NEED TO REMOVE THE HIDDEN CLASS --> use the .remove method
  //   modal.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
  // });

  btnsShowModal[i].addEventListener("click", openModal);
}
// make for loop of showing the modal into a fu
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// hiding/closing the modal - add evetn listener to close modal button
// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// DRY version of code above - not calling the closeModal function because if it has the () then once the page is loaded the function will be invoked - DON'T WANT THAT. It will run once clicked
btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// DRY version of code above - not calling the closeModal function because if it has the () then once the page is loaded the function will be invoked - DON'T WANT THAT. It will run once clicked
overlay.addEventListener("click", closeModal);

// no repeating code in the btncloseModal and overlay event handler functions
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// listening for keyboard events - escape key
// for global events, like keyboard events, listen on the whole document
document.addEventListener("keydown", function () {
  console.log("A key was pressed");
});
