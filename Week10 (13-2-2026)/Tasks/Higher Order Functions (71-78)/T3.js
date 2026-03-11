let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatArray = myArray
	.reduce((a, c) => a + c)
	.split(",")
	.join("");

console.log(flatArray); // Elzero
