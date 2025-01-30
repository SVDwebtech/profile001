// imports
import { hamLogic } from "./modules/hamburgerLogic.js";
import { servicesLinks } from "./modules/appVariables.js";

// variables
const copyrightDate = document.querySelector(".copyrightDate");

// hamburger logic
document.addEventListener("DOMContentLoaded", function () {
  hamLogic();
});

// copyright date logic
const date = new Date();
copyrightDate.textContent = date.getFullYear();

// services logic
servicesCardLinkBtnLogic();
servicesCardReturnHomeBtnLogic();
hideReturnHomeBtnOnScrollLogic();
showReturnHomeBtnOnScrollEndLogic();
