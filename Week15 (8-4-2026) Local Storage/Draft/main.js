// Local Storage saves some info as an object data type in the local storage so it doesn't reset with refresh or tab closing

// Set
window.localStorage.setItem("color", "#fcf3d7");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

// Remove One
window.localStorage.removeItem("fontSize");

// Get Key By Index
console.log(window.localStorage.key(0));

// Clear All
window.localStorage.clear();
