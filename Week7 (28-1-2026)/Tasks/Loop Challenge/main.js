/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
	"Amgad",
	"Samah",
	"Ameer",
	"Omar",
	"Othman",
	"Amany",
	"Samia",
	"Anwar",
];

let numberOfAdmins = 0;

for (let i = 0; i < myAdmins.length; i++) {
	if (myAdmins[i] === "Stop") break;
	numberOfAdmins++;
}

let team1 = [];

// for (let i = 0; 1 < myEmployees.length; i++) {
// 	if (myEmployees[i][0] == myAdmins[0][0]) team1.push(myEmployees[i]);
// }

console.log(team1);
document.write(`<div>We Have ${numberOfAdmins} Admins</div>`);
document.write("<hr></hr>");
