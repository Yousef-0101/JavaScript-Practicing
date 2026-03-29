let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
	.filter((x) => typeof x === "number")
	.map((x) => (x *= -1));

console.log(result); // [-1, -10, 10, 20, -5, -3]
