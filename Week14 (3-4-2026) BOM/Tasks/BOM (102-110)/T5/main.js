let div = document.querySelector("div");

let decreasing = setInterval(counter, 1000);

function counter() {
	div.textContent -= 1;
	if (div.textContent === "5") {
		window.open(
			"https://elzero.org",
			"_blank",
			"width=400,height=400,top=0,left=100",
		);
	}
	if (div.textContent === "0") {
		clearInterval(decreasing);
	}
}
