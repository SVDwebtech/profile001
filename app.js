const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
	if (window.scrollY > 0) {
		navbar.style.backgroundColor = "red";
	}
	else {
		navbar.style.backgroundColor = "white";
	}
});
