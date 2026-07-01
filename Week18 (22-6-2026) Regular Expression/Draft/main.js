/*
    Regular Expression

    - Syntax
    -- /pattern/modifier(s);
    -- new RegExp("pattern", "modifier(s)")

    - Modifiers => Flags
    -- i => Case-Insensitive
    -- g => Global
    -- m => Multilines

    - Search Methods
    -- match(pattern)

    - Ranges
    -- (X|Y) => X Or Y
    -- [0-9] => 0 To 9
    -- [^0-9] => Any Character Not 0 To 9
    -- [abc] => Any of these characters
    -- [^abc] => Anything but these characters
    --- All the above can be letters, numbers or symbols

    - replace
    - replaceAll
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;

console.log(myString.match(regex));

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));
console.log(tld.match(/[ong]/g));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));
console.log(nums.match(/[385]/g));

let notNums = "12345678910";
let notNumsRe = /[^0-2]/g;
console.log(notNums.match(notNumsRe));

let specialNums = "1!2@3#4$5%";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));
console.log(practice.match(/[^A-Z]/gi));
