//////////////////////////////////////////////////////////////////////////
/// imports
import { servicesLinks, servicesPricingCards } from "./appVariables.js";
//////////////////////////////////////////////////////////////////////////
/// functions
const servicesCardLinkBtnLogic = () => {
      for(let link of servicesLinks) {
            const servicesPricingCards = link.parentElement.querySelector('.servicesPricingCards');
            const returnHomeBtn = servicesPricingCards.firstElementChild.firstElementChild;
            link.addEventListener('click', function() {
                  servicesPricingCards.classList.toggle('displayNone');
                  // setTimeout(() => {
                  //       // servicesPricingCards.style.opacity = 1;
                  // }, 100);
                  // setTimeout(() => {
                  //       // returnHomeBtn.style.opacity = 1;
                  // }, 2000);
            });
      }
}

//////////////////////////////////////////////////////////////////////////
/// export
export { servicesCardLinkBtnLogic };