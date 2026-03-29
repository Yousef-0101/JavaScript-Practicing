// DOM Event Simulation [Click | Focus | Blur]

let one = document.querySelector(".one");

window.onload = function () {
	one.focus();
};

one.onclick = function () {
	document.links[0].click();
};

// DOM CLass List [length | contains | item(index) | add | remove | toggle]

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(element.classList.length);
console.log(typeof element.classList);
console.log(element.classList.contains("yousef"));
console.log(element.classList.contains("one"));
console.log(element.classList.item(3));

element.onclick = function () {
	this.classList.add("added-one", "added-two");
	element.classList.remove("test");
	this.classList.toggle("show");
};

// DOM CSS

element.style.color = "red";
element.style.fontWeight = "bold";
// This method overrides the one above ↑↑
element.style.cssText = "font-weight: bold; color: green; opacity: 0.9;"; // Inline Styling

element.style.removeProperty("font-weight");
element.style.setProperty("font-size", "40px", "important"); // (propertyName, value, priority)

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty(
	"background-color",
	"#ddd",
);

// DOM [Deal With Elements]

let createdParagraph = document.createElement("p");

createdParagraph.appendChild(document.createTextNode("This is a paragraph"));

let myOtherDiv = document.getElementById("my-other-div");

myOtherDiv.after("Bye From JS");
myOtherDiv.append(createdParagraph);
myOtherDiv.prepend("Hello From JS ");

myOtherDiv.remove();

// DOM Traversing [nextSibling | previousSibling | nextElementSibling | previousElementSibling | parentElement]

let span = document.querySelector(".span2");

console.log(span.nextSibling); // The very first sibling after it
console.log(span.previousElementSibling); // The first element sibling after it
console.log(span.parentElement);

span.onclick = function () {
	span.parentElement.style.opacity = "0";
};

// DOM [Cloning]

let clonedDiv = myOtherDiv.cloneNode(false); // The default value and doesn't clone the elements inside the main element
let clonedDivElements = myOtherDiv.cloneNode(true); // Clones the elements inside the main element as well

clonedDiv.removeAttribute("id");
clonedDivElements.id = "new-id";

let myMainSEction = document.getElementById("my-section");

myMainSEction.appendChild(clonedDiv);
myMainSEction.appendChild(clonedDivElements);
