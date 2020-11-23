const colors = [
	"red",
	"blue",
	"green"
];

const h1 = document.querySelector("h1");
const body = document.querySelector("body");

let i = 0;
let j = 1;
setInterval(() => {
	h1.style.color = colors[i];
	body.style.backgroundColor = colors[j];
	i++;
	j++;
	if (i > 2) {
		i = 0;
	}
	else if (j > 2) {
		j = 0;
	}
}, 2000);
