const STORAGE_KEY = "color";
const lis = document.querySelectorAll("li");
const preview = document.querySelector(".prev");

function applyColor(color) {
	if (!color) return;

	preview.style.backgroundColor = color;
	lis.forEach((li) =>
		li.classList.toggle("active", li.dataset.color === color),
	);
}

// Load saved color once
const savedColor = window.localStorage.getItem(STORAGE_KEY);
applyColor(savedColor);

// One listener for all clicks on li[data-color]
document.addEventListener("click", (e) => {
	const li = e.target.closest("li[data-color]");
	if (!li) return;

	const selectedColor = li.dataset.color;
	applyColor(selectedColor);
	window.localStorage.setItem(STORAGE_KEY, selectedColor);
});

/*

const lis = document.querySelectorAll("li");
const preview = document.querySelector(".prev");

if (window.localStorage.getItem("color")) {
	// If There's A Color In Local Storage
	// [1] Add Color To Div
	preview.style.backgroundColor = window.localStorage.getItem("color");
	// [2] Remove Active Class From All Li's
	lis.forEach((li) => li.classList.remove("active"));
	// [3] Add Active Class To Current Color
	document
		.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
		.classList.add("active");
}

lis.forEach((li) => {
	li.addEventListener("click", (e) => {
		// Remove Active Class From All Li's
		lis.forEach((li) => li.classList.remove("active"));
		// Add Active Class To Clicked Li
		e.currentTarget.classList.add("active");
		// Save Selected Color
		const selectedColor = e.currentTarget.dataset.color;
		// Add Color To Div
		preview.style.backgroundColor = selectedColor;
		// Add Current Color To Local Storage
		window.localStorage.setItem("color", selectedColor);
	});
});

*/
