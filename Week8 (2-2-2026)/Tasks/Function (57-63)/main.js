// T1
function sayHello(theName, theGender) {
	let title = "";
	if (theGender === "Male") title = "Mr.";
	else if (theGender === "Female") title = "Mrs.";
	console.log(`Hello ${title}${theName}`);
}
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// T2
function calculate(firstNum, secondNum, operation = "add") {
	if (typeof secondNum === "number") {
		if (operation === "add") console.log(firstNum + secondNum);
		else if (operation === "subtract") console.log(firstNum - secondNum);
		else if (operation === "multiply") console.log(firstNum * secondNum);
	} else console.log("Second Number Not Found");
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// T3
let multiplier = [12, 52, 365, 8760, 525600, 31536000];
let time = ["Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"];

function ageInTime(theAge) {
	if (10 < theAge && theAge < 100) {
		for (let i = 0; i < 6; i++) {
			console.log(`${theAge * multiplier[i]} ${time[i]}`);
		}
	} else console.log("Age Is Out Of Range");
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// T5
function createSelectBox(startYear, endYear) {
	document.write("<div>");
	document.write("<select>");
	for (let i = startYear; i <= endYear; i++) {
		document.write(`<option value="${i}">${i}</option>`);
	}
	document.write("</select>");
	document.write("</div>");
}
createSelectBox(2000, 2021);

// T6
function multiply(...number) {
	let result = 1;
	for (let i = 0; i < number.length; i++) {
		if (typeof number[i] === "string") continue;
		result *= Math.trunc(number[i]);
	}
	console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
