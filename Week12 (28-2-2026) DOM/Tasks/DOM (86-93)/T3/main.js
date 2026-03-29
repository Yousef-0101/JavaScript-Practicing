let resultDiv = document.querySelector("div");
let dollarsInput = document.querySelector("input");

function updateResult() {
	let dollars = dollarsInput.value || 0;
	let pounds = (dollars * 51.87).toFixed(2);
	resultDiv.textContent = `${dollars} USD Dollar = ${pounds} Egyptian Pound`;
}

dollarsInput.addEventListener("input", updateResult);
updateResult();
