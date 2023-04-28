"use strict";

let noButton = document.getElementById("noButton");
noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("click", moveButton);
let yesButton = document.getElementById("yesButton");
yesButton.addEventListener("click", thankYou);
let thankYouText = document.getElementById("thankyoutext");

let currentLocation = "avoid8";

function generateRandomnumber(min, max) {
  let number = Math.floor(min + Math.random() * (max + 1 - min));
  return number;
}

function moveButton() {
  console.log("mouseover");
  while (noButton.className == currentLocation) {
    noButton.className = "avoid" + generateRandomnumber(1, 14);
  }
  currentLocation = noButton.className;
  console.log(noButton.className);
}

function thankYou() {
  thankYouText.className = "revealed";
  noButton.removeEventListener("mouseover", moveButton);
  noButton.removeEventListener("click", moveButton);
  yesButton.removeEventListener("click", thankYou);
}
