/*
    Regular Expression

    Quantifiers
    n+ => One Or More
    n* => zero or more
    n? => zero or one
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x
    $  => End With Something
    ^  => Start With Something
    ?= => Followed By Something
    ?! => Not Followed By Something
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

let serial = "S100S S3000S S50000S S950000S";

console.log(serial.match(/s\d{3}s/gi));
console.log(serial.match(/s\d{4,5}s/gi));
console.log(serial.match(/s\d{4,}s/gi));

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4Moustafaz 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));
console.log(/^\w/gi.test(names));
console.log(/^1/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));
