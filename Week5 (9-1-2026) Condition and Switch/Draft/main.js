/*
Ternary Operator
Condition ? If True : If False
*/
let x = 4;

x === 4 ? console.log("Yes") : console.log("No"); // Yes
x === "4" ? console.log("Yes") : console.log("No"); // No
x == "4" ? console.log("Yes") : console.log("No"); // Yes

let result = x === 4 ? console.log("Yes") : console.log("No");
result;

let result2 = x === 4 ? "Yes" : "No";
console.log(result2);

// Nested conditions
// The last : is else and is mandatory
let age = 23;

age < 20
	? console.log(20)
	: age > 20 && age < 60
	? console.log("20 To 60")
	: age > 60
	? console.log("Older Than 60")
	: console.log("Unknown");
