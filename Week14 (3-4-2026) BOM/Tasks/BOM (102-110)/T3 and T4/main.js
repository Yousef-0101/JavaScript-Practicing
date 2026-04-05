let div = document.querySelector("div");

let decreasing = setInterval(counter, 1000);

function counter() {
	div.textContent -= 1;
	if (div.textContent === "0") {
		window.location.replace("https://elzero.org");
	}
}
