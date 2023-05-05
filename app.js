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

hamburgerBtn.addEventListener('click', () => {
  
  hamburgerTopBar.classList.toggle('hamburgerBtn__hamburgerBar--right');
  hamburgerMiddleBar.classList.toggle('hamburgerBtn__hamburgerBar--transparent');
  hamburgerBottomBar.classList.toggle('hamburgerBtn__hamburgerBar--left');
  
//   if(hamburgerMenu.classList.contains('navList--displayNone')) {
//     hamburgerMenu.classList.remove('navList--displayNone');
//     hamburgerMenu.classList.add('navList--display');
//     for(let item of navItems) {
//       item.style.opacity = "0";
//     }
//     setTimeout(() => {
//       hamburgerMenu.classList.remove('navList--navListMoveOut');
//       hamburgerMenu.classList.add('navList--navListMoveIn');
//       for(let item of navItems) {
//         item.classList.remove('navItem--moveOut');
//         item.classList.add('navItem--moveIn');
//       }
//       navItem1.style.animationDelay = '.5s';
//       navItem2.style.animationDelay = '.75s';
//       navItem3.style.animationDelay = '1s';
//       navItem4.style.animationDelay = '1.25s';
//       navItem5.style.animationDelay = '1.5s';
//     }, 20);
//   } else {
//     hamburgerMenu.classList.remove('navList--navListMoveIn')
//     hamburgerMenu.classList.add('navList--navListMoveOut')
//     for(let item of navItems) {
//       item.style.opacity = "1";
//       item.classList.remove('navItem--moveIn');
//       item.classList.add('navItem--moveOut');
//     }
//     navItem1.style.animationDelay = '.25s';
//     navItem2.style.animationDelay = '.5s';
//     navItem3.style.animationDelay = '.75s';
//     navItem4.style.animationDelay = '1s';
//     navItem5.style.animationDelay = '1.25s';
//     setTimeout(() => {
//       hamburgerMenu.classList.remove('navList--display');
//       hamburgerMenu.classList.add('navList--displayNone');
//     }, 3000);
//   }  
});