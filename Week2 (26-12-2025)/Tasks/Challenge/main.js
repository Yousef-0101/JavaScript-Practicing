let articleCode = {
	Title: "Elzero",
	Description: "Elzero Web School",
	Date: "25/10",
};
const markUp = `
<div class="card">
<h3 id="heading">${articleCode.Title}</h3>
<p>${articleCode.Description}</p>
<span>${articleCode.Date}</span>
</div>
`;
document.write(markUp);
const edit = document.getElementById("heading");
edit.insertAdjacentText("afterbegin", "Hello ");
