// Method one

// document.addEventListener("click", function (a) {
// 	getElementType(a);
// });

// function getElementType(a) {
// 	let clickedElement = a.target;
// 	console.log(`This Is ${clickedElement.tagName.toLowerCase()}`);
// }

//-----------------------------------------

// Method two

// document.addEventListener("click", function (clicked) {
// 	let clickedElement = clicked.target;
// 	console.log(`This Is ${clickedElement.tagName.toLowerCase()}`);
// });

//-----------------------------------------

// Method three

document.addEventListener("click", getElementType);

function getElementType(clicked) {
	let clickedElement = clicked.target;
	console.log(`This Is ${clickedElement.tagName.toLowerCase()}`);
}
