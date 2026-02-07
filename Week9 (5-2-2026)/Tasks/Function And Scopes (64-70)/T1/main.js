function getDetails(zName, zAge, zCountry) {
	function namePattern(zName) {
		let nameParts = zName.split(" ");
		return `${nameParts[0]} ${nameParts[1][0].toUpperCase()}.`;
	}
	function ageWithMessage(zAge) {
		let age = parseInt(zAge);
		return age;
	}
	function countryTwoLetters(zCountry) {
		let country = (zCountry[0] + zCountry[1]).toUpperCase();
		return country;
	}
	function fullDetails() {
		return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
	}
	return fullDetails();
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
