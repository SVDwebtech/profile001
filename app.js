// const navbar = document.querySelector("#navbar");
// const navbarBrand = document.querySelector("#navbar-brand");
// const navLogo1 = document.querySelector("#nav-logo-span-1");
// const navLogo2 = document.querySelector("#nav-logo-span-2");
// const hamburgerBtn = document.querySelector("#hamburger-btn");
// const timesBtn = document.querySelector("#menu-times-btn");
// const navabarLinks = document.querySelector("#navbar-subcontainer");
// const menu = document.querySelector("#hamburger-menu");
// const menuLink = document.querySelectorAll(".hamburger-link");
// const navLink = document.querySelectorAll(".nav-link");
// const body = document.querySelector("body");
// const cv = document.querySelector("#cv");

// const stringAnimation = document.querySelector("#heading-span-4");
// const stringAnimationTwo = document.querySelector("#heading-span-5");

// const lmaButton = document.querySelector("#abtlearnmre");
// const lmtButton = document.querySelector("#about-times-btn");
// const moreContent = document.querySelector("#plussContent");
// const lessContent = document.querySelector("#minusContent");

// const skillsHide = document.querySelector("#skill-container");
// const leftArrow = document.querySelector("#leftArrow");
// const rightArrow = document.querySelector("#rightArrow");
// const skillsIcon = document.querySelector("#skillsIcon");
// const skillsDescription = document.querySelector("#skillsDescription");
// const skillsLongDescription = document.querySelector("#skillsLongDescription");
// const indexOne = document.querySelector("#index-box-1");
// const indexTwo = document.querySelector("#index-box-2");
// const indexThree = document.querySelector("#index-box-3");
// const indexFour = document.querySelector("#index-box-4");

// // cv.addEventListener("mouseenter", () => {
// // 	cv.style.transform = "scale(1.05) translateY(-3px)";
// // 	cv.style.boxShadow = "0 5px 10px rgb(1,1,34)";
// // });
// // cv.addEventListener("mouseleave", () => {
// // 	cv.style.transform = "scale(1) translateY(3px)";
// // 	cv.style.boxShadow = "0 0 0 rgb(0,0,0)";
// // });

// window.addEventListener("scroll", () => {
// 	if (window.scrollY > 0) {
// 		navbar.style.backgroundColor = "red";
// 		navbarBrand.style.color = "white";
// 		navLogo1.style.color = "white";
// 		navLogo2.style.color = "rgb(1,1,34)";
// 		hamburgerBtn.style.backgroundColor = "red";
// 		for (let i = 0; i < navLink.length; i++) {
// 			navLink[i].style.color = "white";
// 			navLink[i].addEventListener("mouseenter", () => {
// 				navLink[i].style.color = "rgb(1,1,34)";
// 			});
// 			navLink[i].addEventListener("mouseleave", () => {
// 				navLink[i].style.color = "white";
// 			});
// 		}
// 	}
// 	else {
// 		navbar.style.backgroundColor = "white";
// 		navbarBrand.style.color = "rgb(1,1,34)";
// 		navLogo1.style.color = "rgb(1,1,34)";
// 		navLogo2.style.color = "red";
// 		hamburgerBtn.style.backgroundColor = "white";
// 		for (let i = 0; i < navLink.length; i++) {
// 			navLink[i].style.color = "rgb(1,1,34)";
// 			navLink[i].addEventListener("mouseenter", () => {
// 				navLink[i].style.color = "red";
// 			});
// 			navLink[i].addEventListener("mouseleave", () => {
// 				navLink[i].style.color = "rgb(1,1,34)";
// 			});
// 		}
// 	}
// });

// hamburgerBtn.style.display = "none";
// if (window.innerWidth < 1000) {
// 	hamburgerBtn.style.display = "block";
// 	navabarLinks.style.display = "none";
// }
// else {
// 	hamburgerBtn.style.display = "none";
// 	navabarLinks.style.display = "block";
// }

// window.addEventListener("resize", () => {
// 	if (window.innerWidth < 1000) {
// 		hamburgerBtn.style.display = "block";
// 		navabarLinks.style.display = "none";
// 	}
// 	else {
// 		hamburgerBtn.style.display = "none";
// 		navabarLinks.style.display = "block";
// 		if (menu.classList.add("menuDisplay")) {
// 			menu.classList.remove("menuDisplay");
// 		}
// 	}
// });

// menu.classList.add("menuDisplay");
// hamburgerBtn.addEventListener("click", () => {
// 	menu.classList.toggle("menuDisplay");
// 	window.setTimeout(() => {
// 		menu.style.opacity = 1;
// 	}, 0);
// 	for (let i = 0; i < menuLink.length; i++) {
// 		menuLink[i].style.color = "rgb(1,1,34)";
// 		menuLink[i].addEventListener("mouseenter", () => {
// 			menuLink[i].style.color = "red";
// 		});
// 		menuLink[i].addEventListener("mouseleave", () => {
// 			menuLink[i].style.color = "rgb(1,1,34)";
// 		});
// 	}
// });

// for (let i = 0; i < menuLink.length; i++) {
// 	menuLink[i].addEventListener("click", () => {
// 		menu.classList.toggle("menuDisplay");
// 	});
// }

// timesBtn.addEventListener("click", () => {
// 	menu.style.opacity = 0;
// 	window.setTimeout(() => {
// 		menu.classList.toggle("menuDisplay");
// 	}, 2000);
// });

// moreContent.classList.add("moreContentDisplay");
// lmaButton.addEventListener("click", () => {
// 	lessContent.style.opacity = 0;
// 	lessContent.classList.toggle("lessContentDisplay");
// 	moreContent.classList.toggle("moreContentDisplay");
// 	window.setTimeout(() => {
// 		moreContent.style.opacity = 1;
// 	}, 0);
// });

// lmtButton.addEventListener("click", () => {
// 	moreContent.style.opacity = 0;
// 	moreContent.classList.toggle("moreContentDisplay");
// 	lessContent.classList.toggle("lessContentDisplay");
// 	window.setTimeout(() => {
// 		lessContent.style.opacity = 1;
// 	}, 0);
// });

// const skillItem = {
// 	iconClassAttribute : [
// 		"fa fa-md fa-fast-forward",
// 		"fa fa-md fa-crop",
// 		"fa fa-md fa-compass",
// 		"fa fa-md fa-cogs"
// 	],
// 	heading            : [
// 		"  Fast",
// 		"  Responsive",
// 		"  Intuitive",
// 		"  Dynamic"
// 	],
// 	shortDesription    : [
// 		"Fast loading web applications.",
// 		"Responsive web pages.",
// 		"Intuitive user interfaces and experiences.",
// 		"Interactive web applications constructed dynamically."
// 	],
// 	longDescription    : [
// 		"I use light weight designs to create fast loading web pages, with lag-free interaction, which increases visitor retention and loyalty.",
// 		"I design responsive web pages, with mobile first in mind, that render well on a variety of devices and window or screen sizes.",
// 		"My pages rely on easy to use user interfaces and better user experiences that allow the user to focus on the product or service.",
// 		"I like to construct active pages which comes to life dynamically."
// 	]
// };

// const boxes = [
// 	indexOne,
// 	indexTwo,
// 	indexThree,
// 	indexFour
// ];

// let i = 0;
// leftArrow.addEventListener("click", () => {
// 	i--;
// 	if (i === -1) {
// 		i = 3;
// 	}
// 	skillsHide.style.display = "none";
// 	setTimeout(() => {
// 		skillsHide.style.display = "block";
// 	}, 500);
// 	skillsIcon.setAttribute("class", skillItem.iconClassAttribute[i]);
// 	skillsIcon.innerText = skillItem.heading[i];
// 	skillsDescription.innerText = skillItem.shortDesription[i];
// 	skillsLongDescription.innerText = skillItem.longDescription[i];
// 	if (i === boxes.length - 1) {
// 		boxes[i - (boxes.length - 1)].style.backgroundColor = "rgb(1, 1, 34)";
// 		boxes[i].style.backgroundColor = "red";
// 	}
// 	else {
// 		boxes[i + 1].style.backgroundColor = "rgb(1, 1, 34)";
// 		boxes[i].style.backgroundColor = "red";
// 	}
// });

// rightArrow.addEventListener("click", () => {
// 	i++;
// 	if (i === 4) {
// 		i = 0;
// 	}
// 	skillsHide.style.display = "none";
// 	setTimeout(() => {
// 		skillsHide.style.display = "block";
// 	}, 500);
// 	skillsIcon.setAttribute("class", skillItem.iconClassAttribute[i]);
// 	skillsIcon.innerText = skillItem.heading[i];
// 	skillsDescription.innerText = skillItem.shortDesription[i];
// 	skillsLongDescription.innerText = skillItem.longDescription[i];
// 	if (i === 0) {
// 		boxes[boxes.length - 1].style.backgroundColor = "rgb(1, 1, 34)";
// 		boxes[i].style.backgroundColor = "red";
// 	}
// 	else {
// 		boxes[i - 1].style.backgroundColor = "rgb(1, 1, 34)";
// 		boxes[i].style.backgroundColor = "red";
// 	}
// });

// setInterval(() => {
// 	i++;
// 	if (i === 4) {
// 		i = 0;
// 	}
// 	// skillsHide.classList.toggle(".skills-container-hide");
// 	skillsHide.style.opacity = 0;
// 	window.setTimeout(() => {
// 		skillsIcon.setAttribute("class", skillItem.iconClassAttribute[i]);
// 		skillsIcon.innerText = skillItem.heading[i];
// 		skillsDescription.innerText = skillItem.shortDesription[i];
// 		skillsLongDescription.innerText = skillItem.longDescription[i];
// 		skillsHide.style.opacity = 1;
// 		if (i === 0) {
// 			boxes[boxes.length - 1].style.backgroundColor = "rgb(1, 1, 34)";
// 			boxes[i].style.backgroundColor = "red";
// 		}
// 		else {
// 			boxes[i - 1].style.backgroundColor = "rgb(1, 1, 34)";
// 			boxes[i].style.backgroundColor = "red";
// 		}
// 	}, 1000);
// }, 7000);

// // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// // 	anchor.addEventListener("click", function(e) {
// // 		e.preventDefault();

// // 		document.querySelector(this.getAttribute("href")).scrollIntoView({
// // 			behavior : "smooth"
// // 		});
// // 	});
// // });

// const stringAnimationVariants = [
// 	"a Web Developer!",
// 	"qualified by experience!",
// 	"a family man!",
// 	"a problem solver!"
// ];

// let dispString = "";
// const arrayDisp = {
// 	1 : [],
// 	2 : [],
// 	3 : [],
// 	4 : []
// };

// const arrayDispKeys = Object.keys(arrayDisp);
// console.log("keys", arrayDispKeys["4"]);
// const arrayDispValues = Object.values(arrayDisp);
// console.log("values", arrayDispValues);

// for (let i = 0; i <= stringAnimationVariants.length - 1; i++) {
// 	for (let j = 0; j <= stringAnimationVariants[i].length - 1; j++) {
// 		dispString += stringAnimationVariants[i][j];
// 		arrayDispValues[i][j] = dispString;
// 	}
// 	dispString = "";
// }

// let counter = 0;
// let arrayDispKey = 1;
// let arr = arrayDisp[arrayDispKey];

// // arrow function to type backwards
// const typeRwd = () => {
// 	if (counter >= 1) {
// 		setTimeout(function() {
// 			if (stringAnimation.innerText === "a problem solver!") {
// 				console.log("I'm done!!!");
// 				stringAnimationTwo.classList.add("stringAnimation5-disp-none");
// 			}
// 			else {
// 				counter--;
// 				stringAnimation.innerText = arr[counter];
// 				if (counter === arr.length - 1) {
// 					const intervalID = setInterval(() => {
// 						stringAnimationTwo.classList.toggle(
// 							"stringAnimation5-disp-none"
// 						);
// 					}, 230);
// 					setTimeout(() => {
// 						console.log("wait a bit");
// 						clearInterval(intervalID);
// 						stringAnimationTwo.classList.remove(
// 							"stringAnimation5-disp-none"
// 						);
// 						typeRwd();
// 					}, 2000);
// 				}
// 				else {
// 					typeRwd();
// 				}
// 			}
// 		}, 110);
// 	}
// 	else {
// 		arr = arrayDisp[(arrayDispKey += 1)];
// 		counter = 0;
// 		typeFwd();
// 	}
// };

// // arrow function to type forwards
// const typeFwd = () => {
// 	if (counter <= arr.length - 1) {
// 		setTimeout(function() {
// 			stringAnimation.innerText = arr[counter];
// 			counter++;
// 			typeFwd();
// 		}, 110);
// 	}
// 	else {
// 		typeRwd();
// 	}
// };

// typeFwd();
