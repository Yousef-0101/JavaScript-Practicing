/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Yousef", "Stop", "Samera"];
let myEmployees = [
	"Amgad",
	"Yaseen",
	"Samah",
	"Ameer",
	"Omar",
	"Othman",
	"Amany",
	"Samia",
	"Anwar",
];

let numberOfAdmins = 0;
let teamCounter = 1;
let membersCounter;

for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") break;
	numberOfAdmins++;
}
document.write(`<div>We Have ${numberOfAdmins} Admins</div>`);
document.write(`<hr></hr>`);

for (let i = 0; i < numberOfAdmins; i++) {
	document.write(`<div>The Admin For Team ${teamCounter} Is ${myAdmins[i]}`);
	document.write(`<h3>Team Members:</h3>`);
	teamCounter++;
	membersCounter = 1;
	for (let j = 0; j < myEmployees.length; j++) {
		if (myEmployees[j][0] == myAdmins[i][0]) {
			document.write(`<p>${membersCounter}- ${myEmployees[j]}</p>`);
			membersCounter++;
		} else continue;
	}
	document.write(`</div>`);
	document.write(`<hr></hr>`);
}
