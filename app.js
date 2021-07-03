// //////////////////////////////////////////////////////////////////////////////////////
// VARIABLES
// select all hamburger list links;
const hamburgerLink = document.querySelectorAll(".hamburgerLink");

// animation
const stringAnimation = document.querySelector("#heading-span-4");
const typeCursor = document.querySelector("#heading-span-5");

// card-popup
const moreInfoOpenButton = document.querySelector(".cardOpenMoreInfoPopup");
const cardPopupContent = document.querySelector(".card__popup");
const moreInfoCloseButton = document.querySelector(".popupCloseMoreInfoIcon");

// carousel
const carouselLeftArrow = document.querySelector(".carouselLeftArrow");
const carouselRightArrow = document.querySelector(".carouselRightArrow");

const carouselCardHeadingIcon = document.querySelector(
	".carouselCardHeadingIcon"
);
const carouselCardHeading = document.querySelector(".carouselCardHeading");
const carouselCardInfo = document.querySelector(".carouselCardInfo");
const carouselPopupHeading = document.querySelector(".carouselPopupHeading");
const carouselPopupInfo = document.querySelector(".carouselPopupInfo");

const carouselIndex0 = document.querySelector(".carouselIndex0");
const carouselIndex1 = document.querySelector(".carouselIndex1");
const carouselIndex2 = document.querySelector(".carouselIndex2");
const carouselIndex3 = document.querySelector(".carouselIndex3");

// tools
const toolsLanguages = document.querySelector(".tools__navbarItem--languages");
const toolsTools = document.querySelector(".tools__navbarItem--tools");
const toolsFrameworksAndLibs = document.querySelector(
	".tools__navbarItem--frameworksAndLibs"
);

const toolsLanguages1 = document.querySelector(".tools__toolsList--absItem1");
const toolsLanguages2 = document.querySelector(".tools__toolsList--absItem2");
const toolsLanguages3 = document.querySelector(".tools__toolsList--absItem3");
const toolsLanguages4 = document.querySelector(".tools__toolsList--absItem4");

const toolsTools1 = document.querySelector(".tools__toolsList--absItem5");
const toolsTools2 = document.querySelector(".tools__toolsList--absItem6");
const toolsTools3 = document.querySelector(".tools__toolsList--absItem7");
const toolsTools4 = document.querySelector(".tools__toolsList--absItem8");
const toolsTools5 = document.querySelector(".tools__toolsList--absItem9");

const toolsFrameworksAndLibs1 = document.querySelector(
	".tools__toolsList--absItem10"
);
const toolsFrameworksAndLibs2 = document.querySelector(
	".tools__toolsList--absItem11"
);
const toolsFrameworksAndLibs3 = document.querySelector(
	".tools__toolsList--absItem12"
);

// tools icons;
const languageSpan = document.querySelector(".languageSpan");
const toolsSpan = document.querySelector(".toolsSpan");
const framesLibsSpan = document.querySelector(".framesLibsSpan");

// rarr;
const languageRarr = document.querySelector(".languageRarr");
const toolsRarr = document.querySelector(".toolsRarr");
const framesLibsRarr = document.querySelector(".framesLibsRarr");

// //////////////////////////////////////////////////////////////////////////////////////
// NAVIGATION
// to remove hamburger nav menu when you click on menu item;
// for loop to select all hamburger list links;
for (let i = 0; i < hamburgerLink.length; i++) {
	// use for loop to add eventlistener to each link;
	hamburgerLink[i].addEventListener("click", () => {
		// uncheck checkbox when link is clicked to remove hamburgermenu to see page selection;
		document.querySelector("#hamburgerToggle").checked = false;
	});
}

// to remove hamburger nav menu when window width is bigger than 883;
// add eventlistener for resizing of window width;
window.addEventListener("resize", () => {
	// if window width is bigger than 883px;
	if (document.body.clientWidth > 883) {
		// uncheck checkbox to see page and return to navbar;
		document.querySelector("#hamburgerToggle").checked = false;
	}
});

// //////////////////////////////////////////////////////////////////////////////////////
// HEADER TYPE ANIMATION
// example strings for typewriter animation
const stringOne = "      a Web Developer.    ";
const stringTwo = "      qualified by experience.    ";
const stringThree = "      a family man.    ";
const stringFour = "      a problem solver!    ";
// array with all the string examples
const arrayStringExamples = [
	stringOne,
	stringTwo,
	stringThree,
	stringFour
];
// empty string to which string characters are added over time
let stringSegment = "";
// array to store each string segment
const arrayStringSegments = [];
// for loop to build string segments
for (let i = 0; i < arrayStringExamples.length; i++) {
	arrayStringSegments[i] = [];
	for (let j = 0; j < arrayStringExamples[i].length; j++) {
		stringSegment += arrayStringExamples[i][j];
		arrayStringSegments[i].push(stringSegment);
	}
	stringSegment = "";
}
// print the array with all the string segments in sequence
console.log(arrayStringSegments);
let counterArrayEls = 0;
// a counter to increment after each count
let counterFwd = 0;
// a counter to decrement after each count
let counterBwd = arrayStringSegments[counterArrayEls].length - 1;
// ID to stop setinterval-typewriter;
let stopIntvalID;
// ID to stop setinterval-cursor;
let stopCursorID;
// typeWriter function to call a function after each interval;
function typeWriter() {
	stopIntvalID = setInterval(() => {
		// type forward
		if (counterFwd < arrayStringSegments[counterArrayEls].length) {
			stringAnimation.innerText =
				arrayStringSegments[counterArrayEls][counterFwd];
			counterFwd++;
		}
		else if (
			counterFwd === arrayStringSegments[counterArrayEls].length &&
			counterBwd >= 0 &&
			counterArrayEls !== arrayStringExamples.length - 1
		) {
			// type backward
			stringAnimation.innerText =
				arrayStringSegments[counterArrayEls][counterBwd];
			counterBwd--;
		}
		else if (counterBwd < 0) {
			counterArrayEls++;
			counterFwd = 0;
			if (counterArrayEls > arrayStringExamples.length - 1) {
				// stop typeWriter();
				clearInterval(stopIntvalID);
			}
			else {
				counterBwd = arrayStringSegments[counterArrayEls].length - 1;
			}
		}
	}, 120);
}

function cursorPulsate() {
	stopCursorID = setInterval(() => {
		typeCursor.classList.toggle("displayNone");
	}, 300);
}
cursorPulsate();
setTimeout(() => {
	clearInterval(stopCursorID);
}, 37000);
setTimeout(() => {
	typeWriter();
}, 4000);

// //////////////////////////////////////////////////////////////////////////////////////
// MORE INFO POPUP OPEN & CLOSE BUTTONS FUNCTIONALITY

moreInfoOpenButton.addEventListener("click", function() {
	cardPopupContent.style.opacity = 1;
	cardPopupContent.style.visibility = "visible";
});

moreInfoCloseButton.addEventListener("click", function() {
	cardPopupContent.style.opacity = 0;
	cardPopupContent.style.visibility = "hidden";
});

// //////////////////////////////////////////////////////////////////////////////////////
// CAROUSEL FUNCTIONALITY

// carousel data
const carouselData = {
	cardHeadingIcon : [
		" fa-fast-forward",
		" fa-crop",
		" fa-compass",
		" fa-cogs"
	],
	cardHeading     : [
		"  Fast",
		"  Responsive",
		"  Intuitive",
		"  Dynamic"
	],
	cardInfo        : [
		"Lag-free fast interaction.",
		"Flexible layouts and images.",
		"Efficient and easy to use.",
		"Active and dynamic content."
	],
	cardPopupInfo   : [
		"I use light weight designs to create fast loading web pages, with lag-free interaction, which increases visitor retention and loyalty.",
		"I design applications with mobile-first in mind, with flexible layouts and images which renders well on a variety of devices and screen sizes.",
		"My pages rely on easy to use user interfaces and better user experiences that allow the user to focus on the product or service.",
		"I like to construct active pages which comes to life dynamically."
	]
};

// index for carousel to run paralel to carouselCounter below
const carouselIndex = [
	carouselIndex0,
	carouselIndex1,
	carouselIndex2,
	carouselIndex3
];

let carouselCounter = 0;
carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
cardPopupContent.style.opacity = 0;

// change card and cardPopup data when arrow is clicked
carouselLeftArrow.addEventListener("click", function() {
	if (cardPopupContent.style.opacity === "0") {
		leftArrow();
	}
	else {
		moreInfoCloseButton.classList.add("closePopupFirst");
		setTimeout(function() {
			moreInfoCloseButton.classList.remove("closePopupFirst");
		}, 700);
	}
});

// change card and cardPopup data when arrow is clicked
carouselRightArrow.addEventListener("click", function() {
	if (cardPopupContent.style.opacity === "0") {
		rightArrow();
	}
	else {
		moreInfoCloseButton.classList.add("closePopupFirst");
		setTimeout(function() {
			moreInfoCloseButton.classList.remove("closePopupFirst");
		}, 700);
	}
});

// run carousel automatically
setInterval(() => {
	if (cardPopupContent.style.opacity === "0") {
		rightArrow();
	}
}, 5000);

// //////////////////////////////////////////////////////////////////////////////////////
// TOOLS HOVER EFFECT
toolsLanguages.addEventListener("mouseenter", function() {
	toolsHoverToggle(languageSpan, languageRarr);
	toolsToolsOpacity(0);
	toolsFrmwrkAndLibsOpacity(0);
	toolsLanguagesPosition(
		"1rem",
		"3rem",
		"5rem",
		"7rem",
		"50%",
		"50%",
		"50%",
		"50%",
		"translateX(-50%)"
	);
});

toolsLanguages.addEventListener("mouseleave", function() {
	toolsHoverToggle(languageSpan, languageRarr);
	toolsLanguagesPosition(
		"2rem",
		"4.5rem",
		"7.5rem",
		"12rem",
		"18%",
		"80%",
		"18%",
		"48%",
		"translateX(50%) translateX(-50%)"
	);
	toolsToolsOpacity(1);
	toolsFrmwrkAndLibsOpacity(1);
});

toolsTools.addEventListener("mouseenter", function() {
	toolsHoverToggle(toolsSpan, toolsRarr);
	toolsLanguagesOpacity(0);
	toolsFrmwrkAndLibsOpacity(0);
	toolsToolsPosition(
		"2rem",
		"4rem",
		"6rem",
		"8rem",
		"10rem",
		"50%",
		"50%",
		"50%",
		"50%",
		"50%",
		"translateX(-50%)"
	);
});

toolsTools.addEventListener("mouseleave", function() {
	toolsHoverToggle(toolsSpan, toolsRarr);
	toolsToolsPosition(
		"3rem",
		"4.5rem",
		"7.8rem",
		"9.5rem",
		"11.8rem",
		"60%",
		"23%",
		"75%",
		"60%",
		"10%",
		"translateX(50%) translateX(-50%)"
	);
	toolsLanguagesOpacity(1);
	toolsFrmwrkAndLibsOpacity(1);
});

toolsFrameworksAndLibs.addEventListener("mouseenter", function() {
	toolsHoverToggle(framesLibsSpan, framesLibsRarr);
	toolsLanguagesOpacity(0);
	toolsToolsOpacity(0);
	toolsFrmwrksAndLibsPosition(
		"7rem",
		"9rem",
		"11rem",
		"50%",
		"50%",
		"50%",
		"translateX(-50%)"
	);
});

toolsFrameworksAndLibs.addEventListener("mouseleave", function() {
	toolsHoverToggle(framesLibsSpan, framesLibsRarr);
	toolsFrmwrksAndLibsPosition(
		"1rem",
		"6rem",
		"9.7rem",
		"50%",
		"52%",
		"16%",
		"translateX(50%) translateX(-50%)"
	);
	toolsLanguagesOpacity(1);
	toolsToolsOpacity(1);
});

// /////////////////////////////////////////////////////////////////////////////////////
// APP Functions
//////////////////////////
// carousel functions
function leftArrow() {
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCounter--;
	if (carouselCounter < 0) {
		carouselCounter = 3;
	}
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCardHeadingIcon.innerHTML =
		'<i class="fa fa-sm' +
		" " +
		carouselData.cardHeadingIcon[carouselCounter] +
		' card__heading--icon" aria-hidden="true"></i>';
	carouselCardHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselCardInfo.innerText = carouselData.cardInfo[carouselCounter];
	carouselPopupHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselPopupInfo.innerText = carouselData.cardPopupInfo[carouselCounter];
}

function rightArrow() {
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCounter++;
	if (carouselCounter > 3) {
		carouselCounter = 0;
	}
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCardHeadingIcon.innerHTML =
		'<i class="fa fa-sm' +
		" " +
		carouselData.cardHeadingIcon[carouselCounter] +
		' card__heading--icon" aria-hidden="true"></i>';
	carouselCardHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselCardInfo.innerText = carouselData.cardInfo[carouselCounter];
	carouselPopupHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselPopupInfo.innerText = carouselData.cardPopupInfo[carouselCounter];
}
//////////////////////////
// tools hover functions
function toolsHoverToggle(toolCategorySpan, toolCategoryRarr) {
	toolCategorySpan.classList.toggle("mockbtn");
	toolCategoryRarr.classList.toggle("noneRarr");
}

function toolsToolsOpacity(value) {
	toolsTools1.style.opacity = value;
	toolsTools2.style.opacity = value;
	toolsTools3.style.opacity = value;
	toolsTools4.style.opacity = value;
	toolsTools5.style.opacity = value;
}

function toolsFrmwrkAndLibsOpacity(value) {
	toolsFrameworksAndLibs1.style.opacity = value;
	toolsFrameworksAndLibs2.style.opacity = value;
	toolsFrameworksAndLibs3.style.opacity = value;
}

function toolsLanguagesOpacity(value) {
	toolsLanguages1.style.opacity = value;
	toolsLanguages2.style.opacity = value;
	toolsLanguages3.style.opacity = value;
	toolsLanguages4.style.opacity = value;
}

function toolsLanguagesPosition(
	topRem1,
	topRem2,
	topRem3,
	topRem4,
	leftPerc1,
	leftPerc2,
	leftPerc3,
	leftPerc4,
	transFormItem
) {
	toolsLanguages1.style.top = topRem1;
	toolsLanguages1.style.left = leftPerc1;
	toolsLanguages1.style.transform = transFormItem;
	toolsLanguages2.style.top = topRem2;
	toolsLanguages2.style.left = leftPerc2;
	toolsLanguages2.style.transform = transFormItem;
	toolsLanguages3.style.top = topRem3;
	toolsLanguages3.style.left = leftPerc3;
	toolsLanguages3.style.transform = transFormItem;
	toolsLanguages4.style.top = topRem4;
	toolsLanguages4.style.left = leftPerc4;
	toolsLanguages4.style.transform = transFormItem;
}

function toolsToolsPosition(
	topRem1,
	topRem2,
	topRem3,
	topRem4,
	topRem5,
	leftPerc1,
	leftPerc2,
	leftPerc3,
	leftPerc4,
	leftPerc5,
	transFormItem
) {
	toolsTools1.style.top = topRem1;
	toolsTools1.style.left = leftPerc1;
	toolsTools1.style.transform = transFormItem;
	toolsTools2.style.top = topRem2;
	toolsTools2.style.left = leftPerc2;
	toolsTools2.style.transform = transFormItem;
	toolsTools3.style.top = topRem3;
	toolsTools3.style.left = leftPerc3;
	toolsTools3.style.transform = transFormItem;
	toolsTools4.style.top = topRem4;
	toolsTools4.style.left = leftPerc4;
	toolsTools4.style.transform = transFormItem;
	toolsTools5.style.top = topRem5;
	toolsTools5.style.left = leftPerc5;
	toolsTools5.style.transform = transFormItem;
}

function toolsFrmwrksAndLibsPosition(
	topRem1,
	topRem2,
	topRem3,
	leftPerc1,
	leftPerc2,
	leftPerc3,
	transFormItem
) {
	toolsFrameworksAndLibs1.style.top = topRem1;
	toolsFrameworksAndLibs1.style.left = leftPerc1;
	toolsFrameworksAndLibs1.style.transform = transFormItem;
	toolsFrameworksAndLibs2.style.top = topRem2;
	toolsFrameworksAndLibs2.style.left = leftPerc2;
	toolsFrameworksAndLibs2.style.transform = transFormItem;
	toolsFrameworksAndLibs3.style.top = topRem3;
	toolsFrameworksAndLibs3.style.left = leftPerc3;
	toolsFrameworksAndLibs3.style.transform = transFormItem;
}

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

// typeFwd()
