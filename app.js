const hamburgerBtn = document.querySelector('.hamburgerBtn');

const hamburgerTopBar = document.querySelector(".hamburgerBtn__hamburgerBar--top");
const hamburgerMiddleBar = document.querySelector(".hamburgerBtn__hamburgerBar--middle");
const hamburgerBottomBar = document.querySelector(".hamburgerBtn__hamburgerBar--bottom");

const hamburgerMenu = document.querySelector('.navList');

const navItems = document.querySelectorAll('.navItem');

const navItem1 = document.querySelector('.navItem1');
const navItem2 = document.querySelector('.navItem2');
const navItem3 = document.querySelector('.navItem3');
const navItem4 = document.querySelector('.navItem4');
const navItem5 = document.querySelector('.navItem5');

const profilePhoto = document.querySelector('.profilePhoto');
const logo = document.querySelector('.logo');
const navbar = document.querySelector('.navbar');
const navFrame = document.querySelector('.navFrame');

const copyrightDate = document.querySelector('.copyrightDate');

const returnHomeBtn = document.querySelector('.returnHomeBtn');
const seoPricing = document.querySelector('.seoPricing');
const cardLink = document.querySelector('.cardLink');

let height = navbar.offsetHeight;
navFrame.style.height = `${height}px`;

visualViewport.addEventListener("resize", () => {
  height = navbar.offsetHeight;
  navFrame.style.height = `${height}px`;

  console.log(`navbar height = ${navbar.offsetHeight}`);
  console.log(`navFrame height = ${navFrame.offsetHeight}`);
});

hamburgerBtn.addEventListener('click', () => {
  
  console.log(`navbar offsetHeight = ${navbar.offsetHeight}`);
  navFrame.style.height = `${height}px`;
  console.log(`navFrame offsetHeight = ${navFrame.offsetHeight}`);

  if(!navbar.classList.contains('navbar--background')){
    setTimeout(() => {
      logo.style.visibility = "visible";
      logo.style.opacity = "1";
      navbar.classList.add('navbar--background');
    }, 300);
    
  } else if(window.scrollY < 300) {
    logo.style.visibility = "hidden";
    logo.style.opacity = "0";
    navbar.classList.remove('navbar--background');
  }
  
  if (!hamburgerTopBar.classList.contains('hamburgerBtn__hamburgerBar--right')) {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 200);
  } else {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
  }
  
  
  if(hamburgerMenu.classList.contains('navList--displayNone')) {
    hamburgerMenu.classList.remove('navList--displayNone');
    hamburgerMenu.classList.add('navList--display');
    for(let item of navItems) {
      item.style.opacity = "0";
    }
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--navListMoveOut');
      hamburgerMenu.classList.add('navList--navListMoveIn');
      for(let item of navItems) {
        item.classList.remove('navItem--moveOut');
        item.classList.add('navItem--moveIn');
      }
      navItem1.style.animationDelay = '.70s';
      navItem2.style.animationDelay = '1s';
      navItem3.style.animationDelay = '1.30s';
      navItem4.style.animationDelay = '1.60s';
      navItem5.style.animationDelay = '1.90s';
    }, 20);
  } else {
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.20s';
    navItem2.style.animationDelay = '.30s';
    navItem3.style.animationDelay = '.40s';
    navItem4.style.animationDelay = '.50s';
    navItem5.style.animationDelay = '.60s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  }  
});

window.onscroll = () => {
  if(window.scrollY > 300) {
    logo.style.visibility = "visible";
    logo.style.opacity = "1";
    navbar.classList.add('navbar--background');

  } else if(window.scrollY < 300 && hamburgerMenu.classList.contains('navList--displayNone')){
    logo.style.visibility = "hidden";
    logo.style.opacity = "0";
    navbar.classList.remove('navbar--background');
  }
}

/////////////////////////////////////////////////////////////////////////////////////
// animate hamburgerMenu (close menu) and hamburgerBtn (change to hamburgerBtn) when 
// navItem in hamburgerMenu is clicked
/////////////////////////////////////////////////////////////////////////////////////

for(let item of navItems) {
  item.addEventListener('click', ()=> {
    setTimeout(() => {
      hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
      hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
      hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
    }, 500);
    hamburgerMenu.classList.remove('navList--navListMoveIn')
    hamburgerMenu.classList.add('navList--navListMoveOut')
    for(let item of navItems) {
      item.style.opacity = "1";
      item.classList.remove('navItem--moveIn');
      item.classList.add('navItem--moveOut');
    }
    navItem1.style.animationDelay = '.20s';
    navItem2.style.animationDelay = '.30s';
    navItem3.style.animationDelay = '.40s';
    navItem4.style.animationDelay = '.50s';
    navItem5.style.animationDelay = '.60s';
    setTimeout(() => {
      hamburgerMenu.classList.remove('navList--display');
      hamburgerMenu.classList.add('navList--displayNone');
    }, 2000);
  });
}
/////////////////////////////////////////////////////////////////////
/// copyright date 
const date = new Date();
copyrightDate.textContent = date.getFullYear();
/////////////////////////////////////////////////////////////////////
/// pricing return home button
displaySeoPricing();
cardLink.addEventListener('click', function(){
  cardLinkBtnLogic();
});
seoPricing.addEventListener('scroll', function(){
  returnHomeBtn.style.opacity = 0;
});
seoPricing.addEventListener('scrollend', function(){
  returnHomeBtn.style.opacity = 1;
});
returnHomeBtn.addEventListener('click', function(){
  returnHomeBtnLogic();
});
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