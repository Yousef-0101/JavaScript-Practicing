// DOM Add Event Listener [addEventListener | Use Without On | Attach Multiple Events | Error Test]

let myP = document.querySelector("p");
let willBeCloned = document.getElementById("will-clone");

myP.onclick = one;
myP.onclick = two;

function one() {
	console.log("Message From OnClick 1");
}
function two() {
	console.log("Message From OnClick 2");
}

myP.addEventListener("click", function () {
	console.log("Message From OnClick 1 event");
});
myP.addEventListener("click", one);
myP.addEventListener("click", two);

// myP.addEventListener("click", "string"); // Error

willBeCloned.onclick = () => {
	let newP = willBeCloned.cloneNode(true);
	newP.className = "clone";
	document.body.appendChild(newP);
};

/*
let cloned = document.querySelector(".clone");
cloned.onclick = function () {
	console.log("I'm Cloned");
};
*/ // Error the cloned element isn't defiened yet when the code loads

document.addEventListener("click", function (event) {
	if (event.target.className === "clone") {
		console.log("I'm Cloned");
	}
});
