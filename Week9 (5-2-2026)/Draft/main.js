// Named Function can be called before or after its declaration
console.log(sum(2, 9));
// Named Function :
function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(2, 9));

// Anonymous Function can only be called after its declaration
// console.log(subtract(2, 9)); error
// Anonymous Function :
let subtract = function (num1, num2) {
	return num1 - num2;
};
console.log(subtract(2, 9));
