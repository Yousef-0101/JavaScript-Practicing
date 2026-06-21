let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

function sortAndCount(arr) {
	const numbers = arr.filter((c) => typeof c === "number");
	const letters = arr.filter((c) => typeof c === "string");

	const result = [...numbers, ...letters];
	result.copyWithin(0, numbers.length, numbers.length * 2);

	return result;
}

console.log(sortAndCount(chars));
