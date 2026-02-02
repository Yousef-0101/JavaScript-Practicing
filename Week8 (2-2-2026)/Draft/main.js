function welcome(userName, age, gender) {
	console.log(`${userName} is a ${age} years old ${gender}`);
}
welcome("Yousef", 20, "male");

function sayHello(userName, age, gender) {
	let title;
	if (gender === "male" || gender === "Male") title = "Mr.";
	else title = "Mrs.";
	if (age < 16) console.log("Welcome to Roblox Muahahaha");
	else if (age >= 16 && age < 50)
		console.log(`Welcome to Roblox ${title}${userName}. Go fishiiinngggg!!!!`);
	else if (age >= 50) console.log("You Hag XD");
}
sayHello("Yousef", 20, "male");
