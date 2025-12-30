let num = 3;

// Solution One
console.log(num * (true + true)); // 6

// Solution Two
console.log(num / 0.5); // 6

// Soultion Three
console.log(num + num); // 6

// Soultion Four
console.log(num + +`${num}`); // 6

// Solution Five
console.log(num ** (!false + !false) - num); // 6

// Solution Six
console.log(num * --num); // 6
