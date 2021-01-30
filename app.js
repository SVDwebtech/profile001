const navbar = document.querySelector("#navbar");
const navbarBrand = document.querySelector("#navbar-brand");
const navLogo1 = document.querySelector("#nav-logo-span-1");
const navLogo2 = document.querySelector("#nav-logo-span-2");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const timesBtn = document.querySelector("#menu-times-btn");
const navabarLinks = document.querySelector("#navbar-subcontainer");
const menu = document.querySelector("#hamburger-menu");
const menuLink = document.querySelectorAll(".hamburger-link");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const lmaButton = document.querySelector("#abtlearnmre");
const lmtButton = document.querySelector("#about-times-btn");
const moreContent = document.querySelector("#aboutMoreContent");

const skillsHide = document.querySelector("#skill-container");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");
const skillsIcon = document.querySelector("#skillsIcon");
const skillsDescription = document.querySelector("#skillsDescription");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		navbar.style.backgroundColor = "red";
		navbarBrand.style.color = "white";
		navLogo1.style.color = "white";
		navLogo2.style.color = "rgb(1,1,34)";
		hamburgerBtn.style.backgroundColor = "red";
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].style.color = "white";
			navLink[i].addEventListener("mouseenter", () => {
				navLink[i].style.color = "rgb(1,1,34)";
			});
			navLink[i].addEventListener("mouseleave", () => {
				navLink[i].style.color = "white";
			});
		}
	}
	else {
		navbar.style.backgroundColor = "white";
		navbarBrand.style.color = "rgb(1,1,34)";
		navLogo1.style.color = "rgb(1,1,34)";
		navLogo2.style.color = "red";
		hamburgerBtn.style.backgroundColor = "white";
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].style.color = "rgb(1,1,34)";
			navLink[i].addEventListener("mouseenter", () => {
				navLink[i].style.color = "red";
			});
			navLink[i].addEventListener("mouseleave", () => {
				navLink[i].style.color = "rgb(1,1,34)";
			});
		}
	}
});

hamburgerBtn.style.display = "none";
if (window.innerWidth < 1000) {
	hamburgerBtn.style.display = "block";
	navabarLinks.style.display = "none";
}
else {
	hamburgerBtn.style.display = "none";
	navabarLinks.style.display = "block";
}

window.addEventListener("resize", () => {
	if (window.innerWidth < 1000) {
		hamburgerBtn.style.display = "block";
		navabarLinks.style.display = "none";
	}
	else {
		hamburgerBtn.style.display = "none";
		navabarLinks.style.display = "block";
		if (menu.classList.add("menuDisplay")) {
			menu.classList.remove("menuDisplay");
		}
	}
});

menu.classList.add("menuDisplay");
hamburgerBtn.addEventListener("click", () => {
	menu.classList.toggle("menuDisplay");
	for (let i = 0; i < menuLink.length; i++) {
		menuLink[i].style.color = "rgb(1,1,34)";
		menuLink[i].addEventListener("mouseenter", () => {
			menuLink[i].style.color = "red";
		});
		menuLink[i].addEventListener("mouseleave", () => {
			menuLink[i].style.color = "rgb(1,1,34)";
		});
	}
});

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", () => {
		menu.classList.toggle("menuDisplay");
	});
}

timesBtn.addEventListener("click", () => {
	menu.classList.toggle("menuDisplay");
});

moreContent.classList.add("moreContentDisplay");
lmaButton.addEventListener("click", () => {
	moreContent.classList.toggle("moreContentDisplay");
});

lmtButton.addEventListener("click", () => {
	moreContent.classList.toggle("moreContentDisplay");
});

const skillItem = {
	iconClassAttribute : [
		"fa fa-md fa-fast-forward",
		"fa fa-md fa-crop",
		"fa fa-md fa-compass",
		"fa fa-md fa-cogs"
	],
	heading            : [
		"  Fast",
		"  Responsive",
		"  Intuitive",
		"  Dynamic"
	],
	shortDesription    : [
		"I create fast loading web pages.",
		"I design responsive web pages.",
		"I use well designed interfaces.",
		"I make animated pages."
	],
	longDescription    : [
		"I use light weight designs to create fast loading web pages, with lag-free interaction, which increases visitor retention and loyalty!",
		"I design responsive web pages, with mobile first in mind, that render well on a variety of devices and window or screen sizes.",
		"My pages rely on easy to use user interfaces and better user experiences that allow the user to focus on the product or service!",
		"I like to use active pages which comes to life.  It keeps the user curious and captures their interest."
	]
};

let i = 0;
leftArrow.addEventListener("click", () => {
	i--;
	if (i === -1) {
		i = 3;
	}
	skillsHide.style.display = "none";
	setTimeout(() => {
		skillsHide.style.display = "block";
	}, 500);
	skillsIcon.setAttribute("class", skillItem.iconClassAttribute[i]);
	skillsIcon.innerText = skillItem.heading[i];
	skillsDescription.innerText = skillItem.shortDesription[i];
});

rightArrow.addEventListener("click", () => {
	i++;
	if (i === 4) {
		i = 0;
	}
	skillsHide.style.display = "none";
	setTimeout(() => {
		skillsHide.style.display = "block";
	}, 500);
	skillsIcon.setAttribute("class", skillItem.iconClassAttribute[i]);
	skillsIcon.innerText = skillItem.heading[i];
	skillsDescription.innerText = skillItem.shortDesription[i];
});

const toolsetBox = document.querySelector(".toolset-box-wrapper");
const langBox = document.querySelector("#lang");
const toolBox = document.querySelector("#tool");
const frameBox = document.querySelector("#frame");

let boxWidth;
let subWidth;
let leftPosition;

boxWidth = toolsetBox.clientWidth;
subWidth = langBox.clientWidth;
leftPosition = (boxWidth - subWidth) / 2;

langBox.style.transform = `translateX(${leftPosition - 30}px)`;
toolBox.style.transform = `translateX(${leftPosition}px)`;
frameBox.style.transform = `translateX(${leftPosition + 30}px)`;

window.addEventListener("resize", () => {
	boxWidth = toolsetBox.clientWidth;
	subWidth = langBox.clientWidth;
	leftPosition = (boxWidth - subWidth) / 2;
	console.log(
		`Box: ${boxWidth} and Sub: ${subWidth} and LeftPos: ${leftPosition}`
	);
	langBox.style.transform = `translateX(${leftPosition - 30}px)`;
	toolBox.style.transform = `translateX(${leftPosition}px)`;
	frameBox.style.transform = `translateX(${leftPosition + 30}px)`;
});
