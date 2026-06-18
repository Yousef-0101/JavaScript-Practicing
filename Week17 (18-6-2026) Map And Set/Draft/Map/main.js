// Map doesn't contain key by default
// Object has default keys

let myObject = {};
let myEmptyObject = Object.create(null); // How to crate empty objects
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

// Map => Kay Can Be Anything [Function, Object, Any Primitive Data Types]
// Object => String Or Symbol

let myNewObject = {
	10: "Number",
	10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map([["name", "Yousef"]]);
myNewMap.set(10, "Number");
myNewMap.set("10", "String");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));
console.log(myNewMap.get("name"));

console.log(myNewMap.delete(10));
console.log(myNewMap.size);
