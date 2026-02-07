function checker1(zName) {
	return function (status) {
		return function (salary) {
			return status === "Available"
				? `${zName}, My Salary Is ${salary}`
				: `Iam Not Avaialble`;
		};
	};
}
console.log(checker1("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker1("Ahmed")("Not Available")()); // Iam Not Avaialble

let checker2 = (zName) => (status) => (salary) =>
	status === "Available"
		? `${zName}, My Salary Is ${salary}`
		: `Iam Not Avaialble`;

console.log(checker2("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker2("Ahmed")("Not Available")()); // Iam Not Avaialble
