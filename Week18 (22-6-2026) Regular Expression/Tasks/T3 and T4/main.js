// ---------- Task 3 ----------
let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/));
console.log(phone.match(/\+\(\d+\)-\d+\s\(\d+\)/));

// ---------- Task 4 ----------
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
    - https? => the s is optional

    - (?:[-\w]+\.)?
    -- ?: => non-capturing group
    -- [-\w]+ => one or more of (either - or \w)
    -- \. => normal dot
    -- ? => the whole bracket is optional

    - ([-\w]+) => same as the last one
    - \. => normal dot
    - \w+ => one or more word character

    - (?:\.\w+)?
    -- ?: => non-capturing group
    -- \. => normal dot
    -- \w+ => one or more word character
    -- ? => the whole bracket is optional

    - \/ => optional escaped backslash 
    - .* => zero or more of any characters
*/
