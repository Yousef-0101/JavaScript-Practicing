let oldFriends = ["Yousef", "Mohamed", "Ali", ["Sayed", "Ahmed", "Salem"]];
let temp = 4;

console.log(`Hello ${oldFriends[0]}`);
console.log(`Hello ${oldFriends[1]}`);
console.log(oldFriends[0][3]);
console.log(`Hello ${oldFriends[3]}`);
console.log(`Hello ${oldFriends[3][1]}`);
console.log(`Hello ${oldFriends[3][1][2]}`);

console.log(oldFriends);

oldFriends[2] = "Yasser";
console.log(oldFriends);

oldFriends[3] = "Ahmed";
console.log(oldFriends);

oldFriends[2] = ["Hany", "Adel"];
console.log(oldFriends);

console.log(typeof oldFriends);
console.log(Array.isArray(oldFriends));
console.log(Array.isArray(temp));

console.log(oldFriends.length);
console.log(oldFriends[oldFriends.length - 1]);

oldFriends[oldFriends.length] = "Eslam";
console.log(oldFriends);

/* Adding and Removing elements */
// Adds elements to the start of the array
oldFriends = ["Yousef", "Mohamed", "Ali", "Ahmed"];

oldFriends.unshift("Osama", "Fares");
console.log(oldFriends);

// Adds elements to the end of the array
oldFriends.push("Belal", "Said");
console.log(oldFriends);

// Removes the first element from an array and returns it
let first = oldFriends.shift();

console.log(oldFriends);
console.log(`First name is ${first}`);

// Removes the last element from an array and returns it
let last = oldFriends.pop();

console.log(oldFriends);
console.log(`Last name is ${last}`);

/* Searching in arrays */
// Getting the index of an element (Element, From index [Opt])
console.log(oldFriends.indexOf("Ahmed"));
console.log(oldFriends.indexOf("Ahmed", 2));
console.log(oldFriends.indexOf("Ahmed", 5));

// Getting the index of an element from the last (Element, From index [Opt])
console.log(oldFriends.lastIndexOf("Ahmed"));
console.log(oldFriends.lastIndexOf("Ahmed", 3));
console.log(oldFriends.lastIndexOf("Ahmed", -1));

// Finding if it includes a value (Value, From index [Opt])
console.log(oldFriends.includes("Ahmed"));

/* Sorting arrays */
let unsortedArray = [1, -20, -2, -1, 6243, 3, -9, 9];

console.log(unsortedArray);
console.log(unsortedArray.reverse());
console.log(unsortedArray.sort());
console.log(unsortedArray); // It's now sorted!
console.log(unsortedArray.reverse()); // Sorted and Reversed

/* Slicing arrays */
// Slicing returns a new array
let willBeSliced = ["Ahmed", "Yousef", "Ali", "Khaled", "Said", "Moaz"];

console.log(willBeSliced.slice(1));
console.log(willBeSliced.slice(1, 4));
console.log(willBeSliced.slice(-3));
console.log(willBeSliced.slice(-5, -2));

// Splicing adds or removes elements (Start [Mand], DeleteCount [Opt], The Items To Add [Opt])
let willBeSpliced = ["Ahmed", "Yousef", "Ali", "Khaled", "Said", "Moaz"];

willBeSpliced.splice(1, 2, "Gamal", "Eslam");
console.log(willBeSpliced);

/* Joining arrays */
let myFriends = ["Yousef", "Tasneem", "Sara", "Said", "Ali"];
let newFriends = ["Moaz", "Noor"];
let schoolFriends = ["Mohamed", "Ahmed", "Salem"];

let allFriends = myFriends.concat(newFriends, schoolFriends, "Osama");

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" - "));
console.log(typeof allFriends.join(" - "));
