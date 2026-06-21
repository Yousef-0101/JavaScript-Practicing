/*
    Spread Operator => ...Iterable
    "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Yousef");
console.log(..."Yousef");
console.log([..."Yousef"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

console.log(...myArray1);

let allArrays = [...myArray1, ...myArray2];

console.log(allArrays);

// Copy Array

let copyArray = [...myArray1];
console.log(copyArray);

// Push Inside Array

let allFriends = ["Yousef", "Ahmed", "Sayed"];
let newFriends = ["Noor", "Ali"];

allFriends.push(...newFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, -5000];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let object1 = {
	a: 1,
	b: 2,
};
let object2 = {
	c: 3,
	d: 4,
};

console.log(object1);

let newObject = { ...object1, ...object2, e: 5 };

console.log(newObject);
