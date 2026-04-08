// The Difference between session and local storage is that local storage sves the data even if the tab's closed, while the session storage only saves it in this session
// All the object items is the same as the local storage

/*

- New Tab = New Session
- Dublicate Tab = Copy Session
- New Tab With Same Url = New Session

*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

const textInput = document.querySelector(".name");

textInput.onblur = function () {
	console.log(this.value);
	window.sessionStorage.setItem("input-name", this.value);
};
