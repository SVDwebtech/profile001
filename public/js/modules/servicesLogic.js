//////////////////////////////////////////////////////////////////////////
/// imports
import { cardLink, returnHomeBtn, seoPricing, servicesLinks } from "./appVariables.js";
//////////////////////////////////////////////////////////////////////////
/// functions
function displaySeoPricing() {
  seoPricing.classList.toggle('displayNone');
  returnHomeBtn.classList.toggle('displayNone');
};
function cardLinkBtnLogic() {
  if(seoPricing.classList.contains('displayNone')) {
    seoPricing.classList.toggle('displayNone');
    returnHomeBtn.classList.toggle('displayNone');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      seoPricing.style.opacity = 1;
    }, 100);
    setTimeout(() => {
      returnHomeBtn.style.opacity = 1;
    }, 1500);
  }
};
function returnHomeBtnLogic() {
  if(!seoPricing.classList.contains('displayNone')) {
    seoPricing.scrollTo(0, 0);
    seoPricing.style.opacity = 0;
    document.body.style.overflow = 'scroll';
    setTimeout(() => {
      returnHomeBtn.style.opacity = 0;
      seoPricing.classList.toggle('displayNone');
      returnHomeBtn.classList.toggle('displayNone');
    }, 600);
  }
};
//////////////////////////////////////////////////////////////////////////
/// export
export { displaySeoPricing, cardLinkBtnLogic, returnHomeBtnLogic };