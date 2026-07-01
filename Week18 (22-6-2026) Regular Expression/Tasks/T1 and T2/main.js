// ---------- Task 1 ----------
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

console.log(ip.match(/\w+\W\w+\W\w+\W\w+\W\w+\W\w+\W\w+\W\w+/));
console.log(ip.match(/\w+.\w+.\w+.\w+.\w+.\w+.\w+.\w+/));

// ---------- Task 2 ----------
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bOs\d*\BO/g));

// Output
// ['Os10O', 'OsO', 'Os100O']
