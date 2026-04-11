const font = document.getElementById("font");
const color = document.getElementById("color");
const size = document.getElementById("size");
const text = document.getElementById("text");

const font_key = "font";
const color_key = "color";
const size_key = "size";

function applyStyles() {
	const fontValue = localStorage.getItem(font_key);
	const colorValue = localStorage.getItem(color_key);
	const sizeValue = localStorage.getItem(size_key);

	if (fontValue) {
		font.value = fontValue;
		text.style.fontFamily = fontValue;
	}
	if (colorValue) {
		color.value = colorValue;
		text.style.color = colorValue;
	}
	if (sizeValue) {
		size.value = sizeValue;
		text.style.fontSize = sizeValue;
	}
}

function saveToStorage(key) {
	const value = document.getElementById(key).value;

	window.localStorage.setItem(key, value);
	applyStyles();
}

document.addEventListener("change", (e) => {
	if (e.target.tagName !== "SELECT") return;

	saveToStorage(e.target.id);
});

applyStyles();
