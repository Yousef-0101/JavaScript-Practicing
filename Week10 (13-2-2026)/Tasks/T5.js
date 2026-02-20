let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((a, c) => (c % 2 === 0 ? a * c : a + c), 1);

console.log(result); // 500
