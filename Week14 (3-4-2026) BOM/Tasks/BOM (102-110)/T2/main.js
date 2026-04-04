let div = document.getElementById("div");
let span = document.getElementById("button");

function popUp() {
	div.style.display = "block";
}

setTimeout(popUp, 5000);

span.onclick = function () {
	div.style.display = "none";
};
