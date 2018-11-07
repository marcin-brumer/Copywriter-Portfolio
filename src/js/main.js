import TypeWriter from "./TypeWriter";
import "../scss/main.scss";

// Select DOM items
const txtElement = document.querySelector(".txt-type");
const words = JSON.parse(txtElement.getAttribute("data-words"));
const wait = txtElement.getAttribute("data-wait");
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
sideMenu.addEventListener("click", e => {
  if (e.target.parentElement.className === "side-menu-link") {
    toggleMenu();
  }
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    // Set Menu State
    sideMenu.style.width = "250px";
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    // Set Menu State
    sideMenu.style.width = "0";
    showMenu = false;
  }
}

//Init on DOM load
document.addEventListener("DOMContentLoaded", init);

function init() {
  //Initialize TypeWriter
  new TypeWriter(txtElement, words, wait);
}
