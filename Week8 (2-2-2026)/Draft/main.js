function welcome(userName, age, gender) {
	console.log(`${userName} is a ${age} years old ${gender}`);
}
welcome("Yousef", 20, "male");

function sayHello(userName, age, gender = "male" /* default parameter */) {
	let title;
	if (gender === "male" || gender === "Male") title = "Mr.";
	else title = "Mrs.";
	if (age < 16) console.log("Welcome to Roblox Muahahaha");
	else if (age >= 16 && age < 50)
		console.log(`Welcome to Roblox ${title}${userName}. Go fishiiinngggg!!!!`);
	else if (age >= 50) console.log("You Hag XD");
}
sayHello("Yousef", 20);
sayHello("Yousef", 20, "female");
sayHello("Yousef", 20, "male");

function generateNumber(start, end, exclude) {
	if (start > end) {
		for (let i = start; i >= end; i--) {
			if (i === exclude) continue;
			console.log(i);
		}
	} else {
		for (let i = start; i <= end; i++) {
			if (i === exclude) continue;
			console.log(i);
		}
	}
}
generateNumber(-2, 2, 0);

function sum(num1, num2) {
	return num1 + num2;
}

sum(2, 4); // not outputed
console.log(sum(2, 4)); // 6

function restParametersSum(...numbers /* this is an array */) {
	let reslut = 0;
	for (let i = 0; i < numbers.length; i++) {
		reslut += numbers[i];
	}
	return `Final result is ${reslut}`;
}

console.log(restParametersSum(12, 42, 51, 123, 2, 15));
