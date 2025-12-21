// For waiting until the window loads
window.onload = function () {
	// create the h1 element
	const heading = document.createElement("h1");
	// Add the content to it
	heading.textContent = "Elzero";
	// Append it to the body of the document
	document.body.appendChild(heading);
	// Select the element
	headingstyle = document.querySelector("h1");
	// For setting individual styles
	headingstyle.style.color = "blue";
	// For setting multiple styles at once
	Object.assign(headingstyle.style, {
		fontSize: "80px",
		fontweight: "Bold",
	});
	// For applying styles in a class
	heading.classList.add("my-element-style");
};
