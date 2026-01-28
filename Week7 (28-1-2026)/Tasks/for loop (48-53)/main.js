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

// Output
// 10
// 8
// 6
// 4
