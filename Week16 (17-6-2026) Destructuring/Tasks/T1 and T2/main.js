// -------- Task 1 --------
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a1, , , , e1] = myNumbers;
console.log(a1 * e1); // 5

// -------- Task 2 --------
let mySkills = [
	"HTML",
	"CSS",
	"JavaScript",
	["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// -------- Task 3 --------
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let newArr = arr3.concat(arr1);
// Write Your Destructuring Assignment Here
let [, a3, b3, c3] = newArr;
console.log(`My Best Friends: ${a3}, ${b3}, ${c3}`);

// My Best Friends: Shady, Mahmoud, Ahmed
