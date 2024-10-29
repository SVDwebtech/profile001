//////////////////////////////////////////////////////////////////////////
/// imports
import { servicesLinks } from "./appVariables.js";
//////////////////////////////////////////////////////////////////////////
/// functions
const servicesCardLinkBtnLogic = () => {
      for(let link of servicesLinks) {
            link.addEventListener('click', function() {
                  const card = link.nextElementSibling.nextElementSibling;
                  card.classList.toggle('displayNone');
                  card.style.visibility = 'visible';
                  setTimeout(() => {
                       card.style.opacity = 1; 
                  }, 50);
            });
            
      }
}
//////////////////////////////////////////////////////////////////////////
/// export
export { servicesCardLinkBtnLogic };