// T3
let nom1 = 10;
let nom2 = 30;
let nom3 = "30";

if (nom3 > nom1 && typeof nom3 != typeof nom2) {
	console.log(
		`${nom3} Is Larger Than ${nom1} And The Type ${typeof nom3} Is Not The Same Type As ${typeof nom1}`
	);
}
if (nom3 > nom1 && nom3 == nom2 && typeof nom3 != typeof nom2) {
	console.log(
		`${nom3} Is Larger Than ${nom1} And Value Is The Same As ${nom2} And The Type ${typeof nom3} Is Not The Same Type As ${typeof nom2}`
	);
}
if (nom3 !== nom1 && typeof nom3 != typeof nom2) {
	console.log(
		`${nom3} Value And Type Is Not The Same As ${nom1} And Type Is Not The Same As ${typeof nom2}`
	);
}

// T4

// Edit What You Want Here
let num1 = 7;
let num2 = 5;
let num3 = 7;
let num4 = 30;

// 1 > 2, 1 < 4, 1 === 3, 1 + 2 < 4, 1 + 3 < 4, 1 + 2 + 3 < 4, 4 - (2 * 1) + 2 === 21

/*
Do Not Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num1 > num2) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
	console.log("True");
} else {
	console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
	console.log("True");
} else {
	console.log("False");
}
