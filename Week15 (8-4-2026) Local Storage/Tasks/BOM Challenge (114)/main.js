const inputField = document.querySelector(".input");
const submitBtn = document.querySelector(".add");
const tasksDiv = document.querySelector(".tasks");

const storageKey = "tasks";
let tasks = JSON.parse(localStorage.getItem(storageKey)) || []; // Gets the value of the "tasks" key from local storage

function saveTasks() {
	localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function createNewElements(task) {
	const newDiv = document.createElement("div");
	newDiv.dataset.id = task.id;

	const divText = document.createTextNode(task.title);
	const newSpan = document.createElement("span");
	newSpan.textContent = "Delete";

	newDiv.appendChild(divText).after(newSpan);
	return newDiv;
}

function renderTasks() {
	const fragment = document.createDocumentFragment();
	tasks.forEach((task) => fragment.appendChild(createNewElements(task)));
	tasksDiv.innerHTML = "";
	tasksDiv.appendChild(fragment);
}

function addTask() {
	const taskName = inputField.value;
	if (!taskName) return; // Stops the function if the input was empty

	const newTask = { id: Date.now(), title: taskName };
	tasks.push(newTask); // Pushes the entry to the array
	saveTasks(); // Sets the value to the "tasks" key in local storage

	tasksDiv.appendChild(createNewElements(newTask)); // Adds only the new task
	inputField.value = ""; // Clears the input field
}

tasksDiv.addEventListener("click", (e) => {
	if (e.target.tagName !== "SPAN") return;

	const divToDel = e.target.closest("div");
	const taskId = Number(divToDel.dataset.id);

	tasks = tasks.filter((x) => x.id !== taskId);
	saveTasks();
	divToDel.remove();
});

submitBtn.addEventListener("click", addTask);

renderTasks();
