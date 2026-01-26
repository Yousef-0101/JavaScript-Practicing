/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

let first = my.shift();
my.unshift(first);
console.log(my.slice(zero, my.length - counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my);
console.log(my.slice(0, 2).reverse()); // ["Elham", "Mazero"]

// console.log(); // "Elzero"

// console.log(); // "rO"
