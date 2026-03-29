let myVar = "country";

let user = {
	// Properties
	theName: "Yousef",
	"country of": "Egypt",
	country: "Egypt",
	theAge: 20,
	// Methods
	sayHello: function () {
		return "Hello";
	},
};

console.log(user.sayHello());
console.log(user["country of"]);
console.log(user[myVar]);

// Nested Object
let user2 = {
	name: "Yousef",
	age: 20,
	skills: ["HTML", "CSS", "JS", "C++"],
	available: true,
	addresses: {
		ksa: "Riyadh",
		egypt: {
			one: "Zagazig",
			two: "Cairo",
		},
	},
	checkAv: function () {
		if (user2.available) return "Good";
		else return "Bad";
	},
};

console.log(user2.name);
console.log(user2.age);
console.log(user2.skills.join(" | "));
console.log(user2.skills[2]);
console.log(user2.addresses.ksa);
console.log(user2.addresses.egypt.one);
console.log(user2["addresses"].egypt.one);

console.log(user2.checkAv());

// Object Keyword
let user3 = new Object({
	age: 20,
});

console.log(user3);

user3.age = 20;
user3["country"] = "Egypt";
user3.sayHello = function () {
	return "Hello";
};

console.log(user3);
