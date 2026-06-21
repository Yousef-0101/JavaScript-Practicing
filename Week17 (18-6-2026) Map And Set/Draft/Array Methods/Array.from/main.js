/*
    Array Methods
    - Array.from(Iterable, MapFunc, This)
    --- Variable
    --- String Numbers
    --- Set
    --- Using The Map Function
    --- Arrow Function
    --- Shorten The Method + Use Arguments
*/

console.log(Array.from("Yousef"));
console.log(Array.from(123456)); // Not Iterable = Empty Array
console.log(Array.from("123456", (n) => +n + +n)); // Not Iterable

// Remove Duplicates
let myArray = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArray);
myArray = Array.from(mySet);
console.log(myArray);

// Shortening The Array.from method
function af() {
	return Array.from(arguments);
}

console.log(af("Yousef", 1512, "Ahmed"));
