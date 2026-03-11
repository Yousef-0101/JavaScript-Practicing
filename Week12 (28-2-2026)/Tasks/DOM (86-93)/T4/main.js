let firstDiv = document.body.firstElementChild;
let secondDiv = document.body.querySelector(".two");
let two = document.querySelectorAll("div").length;

let firstTitle = firstDiv.title;
let secondTitle = secondDiv.title;

let firstText = firstDiv.textContent;
let secondText = secondDiv.textContent;

firstDiv.title = secondTitle;
firstDiv.textContent = secondText;

secondDiv.title = firstTitle;
secondDiv.textContent = `${firstText} ${two}`;
