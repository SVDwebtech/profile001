// imports
import { navItem1, hideNav, hamLogic } from "./modules/hamburgerLogic.js";
import { servicesLinks } from "./modules/appVariables.js";

// copyright variables
const copyrightDate = document.querySelector(".copyrightDate");

// hamburger logic
document.addEventListener("DOMContentLoaded", function () {
  console.log("CSS has been parsed, and the DOM is ready.");
  // Place your function call or logic here
  hamLogic();
});

// hide navbar logic: to hide navbar when home-navlink in hamburger menu is clicked
navItem1.addEventListener("click", function () {
  setTimeout(function () {
    hideNav();
  }, 800);
});

// copyright date logic
const date = new Date();
copyrightDate.textContent = date.getFullYear();

// services logic
servicesCardLinkBtnLogic();
servicesCardReturnHomeBtnLogic();
hideReturnHomeBtnOnScrollLogic();
showReturnHomeBtnOnScrollEndLogic();
