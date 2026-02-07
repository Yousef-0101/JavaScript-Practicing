/*
    Scope
    - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
	var a = 10;
	let b = 20;
	console.log(`Function - From Local ${a}`);
	console.log(`Function - From Local ${b}`);
}
console.log(`From Global ${a}`); // These can't access the local scope of the function
console.log(`From Global ${b}`);
showText();

/*
    Scope
    - Block Scope
*/

var x = 10;

if (true) {
	let x = 20;
	console.log(`From If Block ${x}`);
}
console.log(`From Global ${x}`);

/*
    Scope
    - Lexical Scope
*/

function parent() {
	let a = 10;
	function child() {
		console.log(a);
		// console.log(gb); error
		function grandChild() {
			let gb = 25;
			console.log(a);
			console.log(gb);
		}
		grandChild();
	}
	child();
}
parent();
