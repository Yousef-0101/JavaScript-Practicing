// alert | confirm | prompt

// window.alert("test") = this.alert("test") = alert("test")

/* alert */

// alert("Hello");
// console.log("Hello");

/* confirm */

// let confirmMsg = confirm("Are you sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
// 	console.log("Item Deleted");
// } else {
// 	console.log("Item Not Deleted");
// }

/* prompt */

// let promptMsg = prompt("What day is good for you?", "Monday");

// console.log(promptMsg);
//-------------------------------------------------
// setTimeOut | clearTimeOut

setTimeout(() => {
	console.log("Message");
}, 3000 /* time in ms */);

function sayMsg(user, age) {
	console.log(`I'm a message for ${user} whose age is ${age}`);
}

let timeOutCounter = setTimeout(sayMsg, 5000, "Yousef" /* Parameters */, 20);

let btn = document.getElementById("button");

btn.onclick = function () {
	clearTimeout(timeOutCounter);
};
//-------------------------------------------------
// setInterval | clearInterval

let div = document.getElementById("div");

function countDown() {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") {
		clearInterval(divReducing);
	}
}

let divReducing = setInterval(countDown, 1000);
//-------------------------------------------------
// location Object [href | host | hash | protocol | reload() | replace() | assign()]

// location.href = "#/sec02"; // Doesn't delete the entry from history

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

// location.reload();

// location.replace("https://google.com"); // Replaces the entry in history

// location.assign("https://google.com"); // Doesn't replace the entry in history
//-------------------------------------------------
// open | close

// close() // Only closes the windows opened through open()

// setTimeout(() => {
// 	window.open(
// 		"https://google.com",
// 		"_blank",
// 		"width=400,height=400,left=40,top=0",
// 	);
// }, 2000);
//-------------------------------------------------
// history Object [length | back | forward | go]

// history.go(2) // Moves two steps forward
// history.go(-4) // Moves four steps backward
//-------------------------------------------------
// stop() // Stops the site from loading
// print() // Prints the page

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// myNewWindow.focus();
// setTimeout(() => {
// 	myNewWindow.close();
// }, 500);

// scroll(x, y || Options) === scrollTo(x, y || Options) // Scrolls to these coordinates
// scrollBy(x, y || Options) // Scrolls a distance equal to these coordinates

// scroll({
// 	left: 500,
// 	top: 200,
// 	behavior: "smooth",
// });
//-------------------------------------------------
// Scroll To Top Using Y Practice

// scrollX === pageXOffset
// scrollY === pageYOffset

let scrollBtn = document.getElementById("up");

window.onscroll = function () {
	if (scrollY >= 600) {
		scrollBtn.style.display = "block";
	} else {
		scrollBtn.style.display = "none";
	}
};

scrollBtn.onclick = function () {
	window.scroll({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};
