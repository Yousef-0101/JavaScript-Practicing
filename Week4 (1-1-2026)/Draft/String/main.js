let myName = "  Yousef  ";

console.log(myName.trim()); // removes white spaces
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.trim().charAt(4).toUpperCase());

let y = "Yousef Wahba JS";
// indexOf(Value [Mand], Start [Opt] Default 0)
console.log(y.indexOf("j")); // not found = -1 because JS is case sensitive
console.log(y.indexOf("J")); // 13
console.log(y.indexOf("sef", 4)); // -1 because I started after the value
console.log(y.indexOf("sef", 2)); // 3
// lastIndexOf(Value [Mand], Start [Opt] Length)
console.log(y.lastIndexOf("sef", 3)); // 3
console.log(y.lastIndexOf("sef", 2)); // -1 because I started after the value
// slice(Start [Mand], End [Opt] Not Include End)
console.log(y.slice(4)); // ef Wahba JS
console.log(y.slice(4, 8)); // ef W
console.log(y.slice(4, -1)); // ef Wahba J
console.log(y.repeat(5));
// split(Separator [Opt], Limit [Opt])
console.log(y.split()); // ['Yousef Wahba JS']
console.log(y.split("")); // ['Y', 'o', 'u', 's', 'e', 'f', ' ', 'W', 'a', 'h', 'b', 'a', ' ', 'J', 'S']
console.log(y.split(" ")); // ['Yousef', 'Wahba', 'JS']
console.log(y.split("", 6)); // ['Y', 'o', 'u', 's', 'e', 'f']
// substring(Start [Mand], End [Opt] Not Including End)
console.log(y.substring(2, 5));
console.log(y.substring(5, 2));
console.log(y.substring(-5, 3)); // 0 - 3
console.log(y.substring(y.length - 6, y.length)); // hba JS
console.log(y.substring(y.length - 6, y.length - 1)); // hba J
// substr(Start [Mand], Characters To Extract [opt])
console.log(y.substr(3)); // sef Wahba JS
console.log(y.substr(3, 6)); // sef Wa
console.log(y.substr(15)); // ""
console.log(y.substr(-6)); // hba JS
console.log(y.substr(-6, 3)); // hba
// includes(Value [Mand], Start [Opt] Default 0)
console.log(y.includes("Yousef")); // True
console.log(y.includes("yousef")); // False
// startsWith(Value [Mand], Start [Opt] Default 0)
console.log(y.startsWith("You")); // True
console.log(y.startsWith("r")); // False
console.log(y.startsWith("u", 2 /* index */)); // True
console.log(y.startsWith("U", 2)); // False
// endsWith(Value [Mand], Length [Opt] Default Full Length)
console.log(y.endsWith("S")); // True
console.log(y.endsWith("f")); // False
console.log(y.endsWith("ef", 6 /* length */)); // True
