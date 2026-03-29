// T1
let start1 = 10;
let end1 = 100;
let exclude1 = 40;

for (let i = start1; i <= end1; i += start1) {
	if (i === 40) continue;
	console.log(i);
}

// T2
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= stop2; i--) {
	if (i >= start2) console.log(i);
	else console.log(`0${i}`);
}

// T3
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (let i = start3; i <= end3; i++) {
	console.log(i);
	for (let j = breaker3; j < end3; j += breaker3) {
		console.log(`-- ${j}`);
	}
}

// T4
let index4 = 10;
let jump4 = 2;

for (let i = index4; i > jump4; i -= jump4) {
	console.log(i);
}

// T5
let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter5 = "a";

for (let i = letter5.length; i <= friends5.length; i++) {
	if (
		friends5[i - letter5.length].toString().startsWith(letter5.toUpperCase())
	) {
		friends5.splice(i - letter5.length, letter5.length);
	}
	console.log(`${i} => ${friends5[i - letter5.length]}`);
}

// T6
let start6 = 0;
let swappedName6 = "elZerO";
let newstring6 = "";

for (i = start6; i < swappedName6.length; i++) {
	if (swappedName6[i].toUpperCase() === swappedName6[i])
		newstring6 += swappedName6[i].toLowerCase();
	else newstring6 += swappedName6[i].toUpperCase();
}
console.log(newstring6);

// T7
let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];

for (i = start7; i < mix7.length; i++) {
	if (mix7[i] === mix7[start7]) continue;
	if (typeof mix7[i] === "number") console.log(mix7[i]);
}
