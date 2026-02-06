function checkStatus(a, b, c) {
	let job = [a, b, c];
	let age;
	let name;
	let status;
	for (let i = 0; i < job.length; i++) {
		if (typeof job[i] === "boolean")
			status = job[i]
				? "You Are Available For Hire"
				: "You Are Not Available For Hire";
		else if (typeof job[i] === "number") age = job[i];
		else if (typeof job[i] === "string") name = job[i];
	}
	console.log(`Hello ${name}, Your Age Is ${age}, ${status}`);
}
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(20, "Yousef", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 25, "Ali"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Sameh", 44); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
