/*
    Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
    [++a] [+] [+b++] [+] [c++] [-] [+] [a++]
    - Value: 11 + 20 + 80 - 11 = 100
    - Explain: [pre-increment a] [plus] [unary-negation b post-increment] [plus] [unary-plus c post-increment] [minus] [unary-plus a post-increment]
*/
console.log(++a + -b + +c++ - -a++ + +a);
/*
    [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
    - Value: 13 + -21 + 81 - -13 + 14 = 100
    - Explain: [pre-increment a] [plus] [unary-negation b] [plus] [unary-plus c post-increment] [minus] [unary-negation a post-increment] [plus] [unary-plus a]
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
    - Value: 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100
    - Explain: [pre-decrement c] [plus] [unary-plus b] [plus] [pre-decrement a] [multiply] [unary-plus b post-increment] [minus] [unary-plus b] [multiply] [a] [+] [pre-decrement a] [minus] [unary-plus 1]
*/

/*
    Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * 20); // 2000
console.log(-d + e * 2 + f + g * 3); // 173
