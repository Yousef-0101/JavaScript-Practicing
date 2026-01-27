// T1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
myFriends.pop();

// Method 1
console.log(myFriends.slice(-num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(-num)); // ["Ahmed", "Elham", "Osama"];

// T2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// T3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// T4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// T5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) console.log("Found");
if (haystack.indexOf(needle) !== -1) console.log("Found");
if (haystack.lastIndexOf(needle) !== -1) console.log("Found");

// T6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let x = arr1.pop();
arr2.shift();
arr2.shift();
allArrs = arr2[allArrs.length].concat(x, arr2.pop()).toLowerCase();
console.log(allArrs); // fxy
