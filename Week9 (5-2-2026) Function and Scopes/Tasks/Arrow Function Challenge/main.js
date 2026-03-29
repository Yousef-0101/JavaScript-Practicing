/*
    Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names1 = function (...nameInputs) {
	return `String [${nameInputs.join("], [")}] => Done !`;
};
let names2 = (...nameInputs) => `String [${nameInputs.join("], [")}] => Done !`;

console.log(names1("Osama", "Mohamed", "Ali", "Ibrahim"));
console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc1 = (one, two, ...nums) => one + two + parseInt(nums);

function calc2(one, two, ...nums) {
	return one + two + parseInt(nums);
}

console.log(calc1(10, myNumbers.shift(), myNumbers.shift())); // 80
console.log(calc2(10, myNumbers.shift(), myNumbers.shift())); // 80
