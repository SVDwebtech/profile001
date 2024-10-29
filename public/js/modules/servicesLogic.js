//////////////////////////////////////////////////////////////////////////
/// imports
import { returnHomeBtns, servicesLinks } from "./appVariables.js";
//////////////////////////////////////////////////////////////////////////
/// functions
const servicesCardLinkBtnLogic = () => {
      for(let link of servicesLinks) {
            link.addEventListener('click', function() {
                  const card = link.nextElementSibling.nextElementSibling;
                  if(card.classList.contains('displayNone')) {
                        card.classList.toggle('displayNone');
                        card.style.visibility = 'visible';
                        setTimeout(() => {
                              card.style.opacity = 1; 
                        }, 50);
                  }
            });
      }
}
const servicesCardReturnHomeBtnLogic = () => {
      for(let btn of returnHomeBtns) {
            const card = btn.parentElement.parentElement;
            if(!card.classList.contains('.displayNone')) {
                  btn.addEventListener('click', function() {
                  card.style.opacity = 0;
                  setTimeout(() => {
                        card.style.visibility = 'hidden';
                        card.classList.toggle('displayNone');
                  }, 1020);
            });
            }
      }
}
//////////////////////////////////////////////////////////////////////////
/// export
export { servicesCardLinkBtnLogic, servicesCardReturnHomeBtnLogic };