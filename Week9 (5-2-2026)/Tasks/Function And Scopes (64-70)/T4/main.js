function specialMix(...data) {
	let x = 0;
	function sum(element) {
		let num = parseInt(element);
		if (!isNaN(num)) x += num;
	}
	data.forEach(sum);
	if (x === 0) return "All Is Strings";
	return x;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
