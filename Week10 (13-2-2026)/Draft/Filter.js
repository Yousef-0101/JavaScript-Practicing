// Filter returns a new array with only the elements in the base array that passes the condition
let friends = ["Ahmed", "Yousef", "Sayed", "Ali", "Osama"];

let filteredFriends = friends.filter(
	(x) => x.startsWith("A") /*The return acts as a condition*/,
);
console.log(filteredFriends);

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers);

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
	.split(" ")
	.filter((x) => x.length <= 4)
	.join(" ");
console.log(smallWords);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let filteredMix = mix
	.split("")
	.filter((x) => !isNaN(parseInt(x) /*I can also do +x*/))
	.map((x) => x ** 2)
	.join("");
console.log(filteredMix);
