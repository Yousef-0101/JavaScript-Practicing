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
for (let i = 0; i < 4; i++) {
	document.write(markUp);
}
const edit = document.querySelectorAll("#heading");
edit.forEach((edit) => {
	edit.insertAdjacentText("afterbegin", "Hello ");
});
