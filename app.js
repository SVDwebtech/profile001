const navbar = document.querySelector("#navbar");
const navbarBrand = document.querySelector("#navbar-brand");
const navLogo1 = document.querySelector("#nav-logo-span-1");
const navLogo2 = document.querySelector("#nav-logo-span-2");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navabarLinks = document.querySelector("#navbar-subcontainer");
const menu = document.querySelector("#hamburger-menu");
const menuLink = document.querySelectorAll(".hamburger-link");
const navLink = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

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
		hamburgerBtn.innerHTML = '<span><i class="fas fa-bars"></i></span>';
		if (menu.classList.add("menuDisplay")) {
			menu.classList.remove("menuDisplay");
		}
	}
});

menu.classList.add("menuDisplay");
hamburgerBtn.addEventListener("click", () => {
	if (
		hamburgerBtn.innerHTML !== '<span><i class="fas fa-times"></i></span>'
	) {
		hamburgerBtn.innerHTML = '<span><i class="fas fa-times"></i></span>';
		menu.classList.toggle("menuDisplay");
	}
	else {
		hamburgerBtn.innerHTML = '<span><i class="fas fa-bars"></i></span>';
		menu.classList.toggle("menuDisplay");
	}
});

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener("click", () => {
		menu.classList.toggle("menuDisplay");
		hamburgerBtn.innerHTML = '<span><i class="fas fa-bars"></i></span>';
	});
}
