for (let i = 1; i <= 100; i++) {
	let myMainElement = document.createElement("div");
	let myHeading = document.createElement("h2");
	let myParagraph = document.createElement("p");

	let myHeadingText = document.createTextNode(`Product Title ${i}`);
	let myParagraphText = document.createTextNode(`Product Description ${i}`);

	myMainElement.className = "Product";

	// Add Heading Text
	myHeading.appendChild(myHeadingText);

	// Add Heading To Main Element
	myMainElement.appendChild(myHeading);

	// Add Paragraph Text
	myParagraph.appendChild(myParagraphText);

	// Add Paragraph To Main Element
	myMainElement.appendChild(myParagraph);

	// Add Main Element To The Body
	document.body.appendChild(myMainElement);
}
