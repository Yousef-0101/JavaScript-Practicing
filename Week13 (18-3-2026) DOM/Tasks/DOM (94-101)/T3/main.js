let ourElement = document.getElementsByClassName("our-element")[0];

let beforeElement = document.createElement("div");
beforeElement.className = "start";
beforeElement.title = "Start Element";
beforeElement.setAttribute("data-value", "start");
beforeElement.textContent = "Start";

let afterElement = document.createElement("div");
afterElement.className = "end";
afterElement.title = "End Element";
afterElement.setAttribute("data-value", "end");
afterElement.textContent = "End";

ourElement.nextElementSibling.remove();

ourElement.before(beforeElement);
ourElement.after(afterElement);
