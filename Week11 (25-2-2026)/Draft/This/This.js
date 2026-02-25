let user = {
	age: 20,
	ageInDays: function () {
		console.log(this);
		return this.age * 365;
	},
};

console.log(user.age);
console.log(user.ageInDays());

// Create Method
let obj = Object.create({});
obj.a = 100;

console.log(obj);

let prot = {
	age: 20,
	doubleAge: function () {
		return this.age * 2;
	},
};

console.log(prot);
console.log(prot.age);
console.log(prot.doubleAge());

let copyObj = Object.create(prot);

copyObj.age = 30;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

// Assign Method
let obj1 = {
	prop1: 1,
	meth1: function () {
		return this.prop1;
	},
};

let obj2 = {
	prop2: 2,
	meth1: function () {
		return this.prop2;
	},
};

let targetObject = {
	prop1: 1,
	prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
