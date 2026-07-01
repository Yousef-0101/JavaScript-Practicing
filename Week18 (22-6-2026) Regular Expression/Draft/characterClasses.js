/*
    - Character Classes
    -- . => matches any character, except newline or other line terminators.
    -- \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
    -- \W => matches Non word characters
    -- \d => matches digits from 0 to 9.
    -- \D => matches non-digit characters.
    -- \s => matches whitespace character.
    -- \S => matches non whitespace character.
    -- \b => matches at the beginning or end of a word.
    -- \B => matches NOT at the beginning/end of a word.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let nonWord = /\W/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(nonWord));
let valid = /\w@\w.(com|net)/g;
console.log(email.match(valid));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));
console.log(re.test("Osama"));
console.log(re.test("1Spam"));
