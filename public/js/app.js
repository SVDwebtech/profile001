// imports
import { hamLogic } from "./modules/hamburgerLogic.js";
import { servicesCardLinkBtnLogic, servicesCardReturnHomeBtnLogic, hideReturnHomeBtnOnScrollLogic, showReturnHomeBtnOnScrollEndLogic } from "./modules/servicesLogic.js";
import { getCopyrightCurrentYear } from "./modules/copyrightDateLogic.js";

// hamburger logic
document.addEventListener("DOMContentLoaded", function () {
  hamLogic();
});

// copyright date logic
getCopyrightCurrentYear();

// services logic
servicesCardLinkBtnLogic();
servicesCardReturnHomeBtnLogic();
hideReturnHomeBtnOnScrollLogic();
showReturnHomeBtnOnScrollEndLogic();
