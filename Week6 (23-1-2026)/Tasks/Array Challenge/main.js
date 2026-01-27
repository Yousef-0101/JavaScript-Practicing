/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, my.indexOf("Gamal")).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.reverse().slice(counter, my[zero].length)); // ["Elham", "Mazero"]

let el = my
	.slice(counter, my[zero].length)
	.shift()
	.slice(zero, my[zero].length - counter);
let ze = my
	.slice(counter, my[zero].length)
	.pop()
	.slice(my[zero].length - counter);
console.log(el + ze); // "Elzero"

console.log(
	ze.charAt(my[zero].length - counter) +
		ze.charAt(my.length - counter).toUpperCase(),
); // "rO"
