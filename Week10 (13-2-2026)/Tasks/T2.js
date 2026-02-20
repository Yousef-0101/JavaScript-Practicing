let myString = "EElllzzzzzzzeroo";

let result = myString
	.split("")
	.filter((element, index, arr) => arr.indexOf(element) === index)
	.reduce((a, c) => a + c);
// Elzero
console.log(result);
