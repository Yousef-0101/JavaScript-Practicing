let createdElement;
document.forms[0].onsubmit = (event) => {
	document.querySelector(".results").innerHTML = "";
	event.preventDefault();

	let numberOfElements = document.querySelector("[name='elements']").value;
	let elementsText = document.querySelector("[name='texts']").value;
	let elementsType = document
		.querySelector("[name='type']")
		.value.toLowerCase();

	for (let i = 0; i < numberOfElements; i++) {
		createdElement = document.createElement(elementsType);

		createdElement.className = "box";
		createdElement.title = "Element";
		createdElement.id = `id-${i + 1}`;
		createdElement.textContent = elementsText;

		document.querySelector(".results").appendChild(createdElement);
	}
};
