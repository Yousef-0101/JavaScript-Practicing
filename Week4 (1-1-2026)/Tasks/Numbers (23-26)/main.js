// T1
console.log(9e4 + 1e4); // 100000
console.log(10_0000); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(100 ** 2.5); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.99)); // 100000
console.log(Math.trunc(100000.3213)); // 100000
console.log(parseInt("100000 fsakjfiloj")); // 100000
console.log(Math.max(100000, 99999)); // 100000
console.log(parseInt((1e5).toString())); // 100000

// T2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// T3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
console.log(Math.trunc(Number.MAX_SAFE_INTEGER ** (1 / 13))); // 16

// T4
let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar))); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

// T5
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// T6
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(flt.toFixed()); // 10
console.log(parseInt(flt)); // 10

// T7
console.log(Math.random() * 4); // 0 || 1 || 2 || 3 || 4
// Math.random() * (max - min) + min;
