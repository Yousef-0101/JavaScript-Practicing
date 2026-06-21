// -------- Task 4 --------
let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().join(""));

// -------- Task 5 --------
let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(new Array(...theName));
console.log(theName.split(""));
console.log([].concat(...theName));

let array5 = [];
for (let c of theName) array5.push(c);
console.log(array5);
