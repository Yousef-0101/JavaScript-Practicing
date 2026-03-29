function specialMix(...data) {
	let sum = data.reduce(
		(a, c) => (!isNaN(parseInt(c)) ? a + parseInt(c) : a),
		0,
	);
	return sum !== 0 ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
