// Named Function can be called before or after its declaration
console.log(sum(2, 9));
// Named Function :
function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(2, 9));

// Anonymous Function can only be called after its declaration

// console.log(subtract(2, 9)); error
// Anonymous Function :
let subtract = function (num1, num2) {
	return num1 - num2;
};
console.log(subtract(2, 9));

// Example 1
function sayMessage(fName, lName) {
	let message = "Hello";
	// Nested Function
	function concatMsg() {
		message = `${message} ${fName} ${lName}`;
	}
	concatMsg();
	return message;
}
console.log(sayMessage("Yousef", "Wahba"));

// Example 2
function sayMessage(fName, lName) {
	let message = "Hello";
	// Nested Function
	function concatMsg() {
		return `${message} ${fName} ${lName}`;
	}
	return concatMsg();
}
console.log(sayMessage("Yousef", "Wahba"));

// Example 3
function sayMessage(fName, lName) {
	let message = "Hello";
	// Nested Function
	function concatMsg() {
		// Nested Function
		function getFullName() {
			return `${fName} ${lName}`;
		}
		return `${message} ${getFullName()}`;
	}
	return concatMsg();
}
console.log(sayMessage("Yousef", "Wahba"));

// Arrow Function
let print1 = () => {
	return 1;
};
console.log(print1());

// If only one line you can write it like this:
let print2 = () => 2;
// let print2 = _ => 10; can also be done like this if there's no parameters
console.log(print2());

// let print3 = function (num) {
// 	return num;
// };
let print3 = (num) => num;
// let print3 = num => num; can also be done like this if there's only one parameter
console.log(print3(3));

let print4 = (num1, num2) => num1 + num2;
console.log(print4(10, 4));
