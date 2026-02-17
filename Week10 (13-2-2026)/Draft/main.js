// Map
let myNums = [1, 2, 3, 4, 5, 6];

let addSelf = myNums.map(function (element) {
	return element + element;
});

let addSelfArrow = myNums.map((element) => element + element);

console.log(addSelf);
console.log(addSelfArrow);

function addition(element) {
	return element + element;
}

let add = myNums.map(addition);
console.log(add);

/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Numbers
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
	.split("")
	.map(function (a) {
		return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
	})
	.join("");
console.log(sw);

// Arrow Version
let swArrow = swappingCases
	.split("")
	.map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
	.join("");
console.log(swArrow);

let inv = invertedNumbers.map(function (a) {
	return -a;
});
console.log(inv);

// Arrow Version
let invArrow = invertedNumbers.map((a) => -a);
console.log(invArrow);

let ign = ignoreNumbers
	.split("")
	.map(function (a) {
		return isNaN(parseInt(a)) ? a : "";
	})
	.join("");
console.log(ign);

// Arrow Version
let ignArrow = ignoreNumbers
	.split("")
	.map((a) => (isNaN(parseInt(a)) ? a : ""))
	.join("");
console.log(ignArrow);
