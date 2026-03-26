let additionInput = document.getElementsByClassName("classes-to-add")[0];
let removalInput = document.getElementsByClassName("classes-to-remove")[0];

let currentElement = document.querySelector("[title=Current]");
let spansDiv = document.querySelector(".classes-list > div");

function addingClasses() {
	if (additionInput.value !== "") {
		let classesToAdd = additionInput.value.toLowerCase().split(" ").sort();

		while (classesToAdd[0] === "") {
			classesToAdd.shift();
		}

		classesToAdd.forEach((addedClass) => {
			currentElement.classList.add(addedClass);
		});

		additionInput.value = "";
	}
}

function removingClasses() {
	if (removalInput.value !== "") {
		let classesToRemove = removalInput.value.toLowerCase().split(" ").sort();

		while (classesToRemove[0] === "") {
			classesToRemove.shift();
		}

		classesToRemove.forEach((removedClass) => {
			currentElement.classList.remove(removedClass);
		});

		removalInput.value = "";
	}
}

function updatingSpans() {
	spansDiv.replaceChildren();

	if (currentElement.classList.length === 0) {
		spansDiv.textContent = "No Classes To Show";
		return;
	}

	currentElement.classList.forEach((element) => {
		let newSpan = document.createElement("span");
		newSpan.textContent = element;
		spansDiv.appendChild(newSpan);
	});
}

function addition() {
	addingClasses();
	updatingSpans();
}

function removal() {
	removingClasses();
	updatingSpans();
}

additionInput.addEventListener("blur", addition);
removalInput.addEventListener("blur", removal);
window.addEventListener("load", updatingSpans);
