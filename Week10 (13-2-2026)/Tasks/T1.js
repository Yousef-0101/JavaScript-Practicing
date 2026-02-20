let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
	.map((x) => (typeof x === "string" ? x : ""))
	.reduce((a, c) => a + c);

console.log(result); // Elzero
