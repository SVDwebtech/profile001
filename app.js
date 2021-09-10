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

// popup component
const learnMorePopupButton = document.querySelector(".learnMorePopupBtn");
const learnMoreCloseButton = document.querySelector(".learnMoreCloseBtn");

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
const stringOne = "      an excellent researcher.    ";
const stringTwo = "      qualified by experience.    ";
const stringThree = "      a problem solver.    ";
const stringFour = "      a family man!    ";
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
// POPUP COMPONENT LIMITED SCROLL
learnMorePopupButton.addEventListener("click", function() {
	document.body.classList.add("stop-scrolling");
});
learnMoreCloseButton.addEventListener("click", function() {
	document.body.classList.remove("stop-scrolling");
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
}, 6000);

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
	carouselCardHeadingIcon.style.opacity = 0;
	carouselCardHeading.style.opacity = 0;
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCounter--;
	if (carouselCounter < 0) {
		carouselCounter = 3;
	}
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselPopupHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselPopupInfo.innerText = carouselData.cardPopupInfo[carouselCounter];
	// opacity styled from 0 to 1 and transition delayed in _card.scss
	setTimeout(() => {
		carouselCardHeadingIcon.style.opacity = 1;
		carouselCardHeading.style.opacity = 1;
		carouselCardHeadingIcon.innerHTML =
			'<i class="fa fa-sm' +
			" " +
			carouselData.cardHeadingIcon[carouselCounter] +
			' card__heading--icon" aria-hidden="true"></i>';
		carouselCardHeading.innerText =
			carouselData.cardHeading[carouselCounter];
		carouselCardInfo.innerText = carouselData.cardInfo[carouselCounter];
	}, 500);
}

function rightArrow() {
	carouselCardHeadingIcon.style.opacity = 0;
	carouselCardHeading.style.opacity = 0;
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselCounter++;
	if (carouselCounter > 3) {
		carouselCounter = 0;
	}
	carouselIndex[carouselCounter].classList.toggle("carouselIndexColor");
	carouselPopupHeading.innerText = carouselData.cardHeading[carouselCounter];
	carouselPopupInfo.innerText = carouselData.cardPopupInfo[carouselCounter];
	// opacity styled from 0 to 1 and transition delayed in _card.scss
	setTimeout(() => {
		carouselCardHeadingIcon.style.opacity = 1;
		carouselCardHeading.style.opacity = 1;
		carouselCardHeadingIcon.innerHTML =
			'<i class="fa fa-sm' +
			" " +
			carouselData.cardHeadingIcon[carouselCounter] +
			' card__heading--icon" aria-hidden="true"></i>';
		carouselCardHeading.innerText =
			carouselData.cardHeading[carouselCounter];
		carouselCardInfo.innerText = carouselData.cardInfo[carouselCounter];
	}, 500);
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
