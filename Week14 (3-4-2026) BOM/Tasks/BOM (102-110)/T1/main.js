let userInput = window.prompt("Print Number From - To", "Example: 5-20");

let numbers = userInput
	.split("-")
	.map(Number)
	.sort((a, b) => a - b);

console.log(numbers);

for (let i = numbers[0]; i <= numbers[1]; i++) {
	console.log(i);
}
