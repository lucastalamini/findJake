// Targeted elements

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const jake = document.querySelector(".jake-img");
const jakeImg = document.querySelector(".img");
const audio = new Audio("/bells.mp3");

// Random Number for positioning

function getRandomTop() {
  randomTop = Math.floor(Math.random() * 86);
  return randomTop;
}

console.log(getRandomTop());

function getRandomLeft() {
  randomLeft = Math.floor(Math.random() * 95);
  return randomLeft;
}

console.log(getRandomLeft());
// console.log(getRandomNumber());

// Add Event Listeners

// Randomize Jake Location

btn.addEventListener("click", function () {
  container.classList = "container-hidden";
  jake.classList = "jake-img-hidden";
  jakeImg.style.top = `${getRandomTop()}%`;
  jakeImg.style.left = `${getRandomLeft()}%`;
});

// Show Jake when he is clicked
jakeImg.addEventListener("click", function () {
  jake.classList = "jake-img";
});

// Mouse Over Alert

window.ev = false;

document.getElementById("jake-img").onmouseover = function () {
  window.ev = true;
  console.log(window.ev);
  audio.play();
};

document.getElementById("jake-img").onmouseout = function () {
  window.ev = false;
  console.log(window.ev);
};
