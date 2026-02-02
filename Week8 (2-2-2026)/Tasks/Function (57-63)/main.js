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

// T4
function checkStatus(a, b, c) {
	let job = [a, b, c];
	let age;
	let name;
	let status;
	for (let i = 0; i < job.length; i++) {
		if (typeof job[i] === "boolean")
			status = job[i]
				? "You Are Available For Hire"
				: "You Are Not Available For Hire";
		else if (typeof job[i] === "number") age = job[i];
		else if (typeof job[i] === "string") name = job[i];
	}
	console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(20, "Yousef", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 25, "Ali"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Sameh", 44); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

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
