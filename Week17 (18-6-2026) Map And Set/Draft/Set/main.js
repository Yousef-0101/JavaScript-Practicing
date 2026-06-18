// --------- Set Data Type ---------
// Set is a data type that only stores unique values
// Set can't access values by index

/* Ways to add elements to a set */

// let mySet = new Set().add(1).add(1).add(1).add(2).add(2).add(3);
// let mySet = new Set();
// mySet.add(1).add(1).add(1).add(2).add(2).add(3);
let mySet = new Set([1, 1, 1, 2, 2, 3, "A"]);

console.log(mySet);
console.log(mySet.size);

// Delete a specific element
mySet.delete(2);

console.log(mySet);
console.log(mySet.size);

// Searching using "has"
console.log(mySet.has("A")); // True

// Clear the entire set
// mySet.clear();

console.log(mySet);

// --------- Weak Set Data Type ---------
// Can store objects only
// Doesn't has "size property"
let myWeakSet = new WeakSet([{ A: 1, B: 2 }]);
console.log(myWeakSet);

// Can't be used with "forEach()"
mySet.forEach((element) => console.log(element));
// myWeakSet.forEach((element) => console.log(element)); // Error
