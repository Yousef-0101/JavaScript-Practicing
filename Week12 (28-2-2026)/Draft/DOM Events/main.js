/*
    Some DOM [Events]
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize

    --- onfocus
    --- onblur
    --- onsubmit
*/
let myButton = document.getElementById("button");

myButton.onclick = () => console.log("Clicked"); // Equals {onclick="console.log('Clicked')"} in HTML

window.onscroll = () => console.log("Scroll");

window.onresize = () => console.log("Resize");

myButton.onfocus = () => console.log("Focus");

// Form Validation
let userName = document.querySelector("[name= 'username']");
let userAge = document.querySelector("[name= 'age']");

console.log(userName);
console.log(userAge);

document.forms[0].onsubmit = (e) => {
	let userValid = false;
	let ageValid = false;

	if (
		userName.value !== "" /* or userName.value.length > 0 */ &&
		userName.value.length <= 10
	) {
		userValid = true;
	}

	if (userAge.value !== "") {
		ageValid = true;
	}

	if (!userValid || !ageValid) {
		e.preventDefault();
	}
};

document.links[0].onclick = (event) => {
	console.log(event);
	event.preventDefault();
};
