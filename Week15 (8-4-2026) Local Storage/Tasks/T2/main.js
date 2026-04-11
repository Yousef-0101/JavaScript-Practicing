const fields = document.querySelectorAll("input, select");

console.log(fields);

function loadFields() {
	fields.forEach((field) => {
		field.value = window.sessionStorage.getItem(field.id);
	});
}

function saveInputs(input) {
	window.sessionStorage.setItem(input.id, input.value);
}

function fieldChange(e) {
	const field = e.target.closest("input, select");
	if (!field) return;
	saveInputs(field);
}

document.addEventListener("input", fieldChange);
document.addEventListener("change", fieldChange);

loadFields();
