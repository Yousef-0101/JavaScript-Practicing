// Reduce returns only one value after doing processes on it

let nums = [10, 20, 15, 30];

let add = nums.reduce(function (accumulator, currrent, index, arr) {
	return accumulator + currrent;
}, 5 /*Initial value stored in the accumulator*/);
console.log(add);
//

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Helllllllo"];

let check = theBiggest.reduce((accumulator, currrent) =>
	accumulator.length > currrent.length ? accumulator : currrent,
);
console.log(check);
//

let removeChars = ["Y", "@", "O", "@", "U", "@", "S", "@", "E", "@", "F", "@"];

let editedString = removeChars
	.filter((x) => x !== "@")
	.reduce((a, c) => `${a}${c}`); // Replaces .join("")
console.log(editedString);
