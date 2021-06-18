"use strict";
// Select the elements we need and store the selections into variables - obv better than selecting the same elements over and over again
// need to manipulate the modal, close and show, overlay
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// const btnsShowModal = document.querySelector(".show-modal"); // whenever using a querySelector with a selector with multiple elements, only the first one will get selected
const btnsShowModal = document.querySelectorAll(".show-modal"); // this gives us a NodeList

// you'll see the NodeList - not an array! (can loop through it)
console.log(btnsShowModal);

// loop through the NodeList and doo something with the show modal btns
for (let i = 0; i < btnsShowModal.length; i++) {
  console.log(btnsShowModal[i]);
  console.log(btnsShowModal[i].textContent);

  // react to a click event on each button
  btnsShowModal[i].addEventListener("click", function () {
    console.log(btnsShowModal[i].textContent);
  });
}
