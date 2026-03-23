// Header

let header = document.createElement("header");
let title = document.createElement("h2");
let list = document.createElement("li");
let listItems = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < listItems.length; i++) {
	let ul = document.createElement("ul");
	let ulText = document.createTextNode(listItems[i]);
	ul.appendChild(ulText);
	ul.style.padding = "0 0.5em";
	ul.style.listStyle = "none";
	list.appendChild(ul);
}

title.appendChild(document.createTextNode("Yousef"));
header.appendChild(title);
document.body.appendChild(header);
title.after(list);

// Styling

document.querySelector("*").style.boxSizing = "border-box";

document.body.style.fontSize = "0.8rem";
document.body.style.fontFamily = "arial";
document.body.style.margin = "0";
document.body.style.height = "100vh";

header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.height = "7%";
header.style.padding = "0.5em 1em";

title.style.margin = "0.4em 0";
title.style.fontWeight = "800";
title.style.color = "#23a96e";

list.style.display = "flex";
list.style.listStyle = "none";
list.style.color = "#727272";

// Main

let main = document.createElement("main");
main.className = "content";

for (let i = 0; i < 15; i++) {
	let product = document.createElement("div");
	let span = document.createElement("span");
	let number = document.createTextNode(i + 1);

	product.className = "product";

	span.appendChild(number);
	product.appendChild(span);
	span.after("Product");
	main.appendChild(product);

	product.style.display = "flex";
	product.style.flexDirection = "column";
	product.style.justifyContent = "space-evenly";
	product.style.alignItems = "center";
	product.style.backgroundColor = "#fff";
	product.style.color = "#727272";

	span.style.marginBottom = "-0.4em";
	span.style.fontSize = "1.5rem";
	span.style.color = "#000";
}

document.body.appendChild(main);

// Styling

main.style.display = "grid";
main.style.gridTemplate = "repeat(5, 1fr) / repeat(3, 1fr)";
main.style.gap = "1em";
main.style.height = "calc(86% - 3em)";
main.style.padding = "1em";
main.style.backgroundColor = "#ececec";

// Footer

let footer = document.createElement("footer");
let copyright = document.createTextNode("Copyright 2026");

footer.appendChild(copyright);
document.body.appendChild(footer);

// Styling

footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.height = "7%";
footer.style.fontSize = "1rem";
footer.style.backgroundColor = "#23a96e";
footer.style.color = "#fff";
