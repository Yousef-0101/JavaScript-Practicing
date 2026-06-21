let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log(new Array(...numsOne, ...numsTwo));
console.log(Array.from(new Set([...numsOne, ...numsTwo])));

let newArray = [...numsOne];
newArray.push(...numsTwo);
console.log(newArray);
