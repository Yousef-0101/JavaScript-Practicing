let myFriends = [
	"Yousef",
	"Tasneem",
	Number,
	"Basmla",
	2,
	"Ali",
	String,
	59,
	"Said",
	42,
	5,
];
let index = 0;
let onlyNames = [];
let onlyNumbers = [];

for (let i = 0; i < myFriends.length; i++) {
	if (typeof myFriends[i] === "string") {
		onlyNames[index] = myFriends[i];
		index++;
	} else if (typeof myFriends[i] === "number") {
		onlyNumbers.push(myFriends[i]);
	} else
		console.log(
			`The element with the index of ${[i]} Is neither a string nor a number`,
		);
}
console.log(onlyNames);
console.log(onlyNumbers);

// (break) stops the loop
// (continue) skips the current iteration

let products = [
	"Case",
	2,
	54,
	"GPU",
	84,
	"MotherBoard",
	"Monitor",
	379,
	"Cooler",
];
let brands = ["ASUS", "MSI", "AORUS"];

mainloop: for (let i = 0; i < products.length; i++) {
	if (typeof products[i] === "number") continue;
	console.log(products[i]);
	nestedloop: for (let j = 0; j < brands.length; j++) {
		if (brands[j] === "MSI") continue mainloop;
		console.log(`- ${brands[j]}`);
	}
}
// another way to type the for loop

let i = 0;

for (;;) {
	console.log(products[i]);
	i++;
	if (i === products.length) break;
}
