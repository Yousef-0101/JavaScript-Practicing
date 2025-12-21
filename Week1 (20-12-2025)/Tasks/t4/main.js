// Creating a collapsed console group and naming it "Group 1"
console.groupCollapsed("Group 1");
console.log("Hi this is message 1");
console.log("Hi this is message 2");
// Nesting a child group inside it
console.groupCollapsed("Child Group");
console.log("Hi this is message 1");
console.log("Hi this is message 2");
console.groupCollapsed("Grand Child Group");
console.log("Hi this is message 1");
console.log("Hi this is message 2");
// Ending the group
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.groupCollapsed("Group 2");
console.log("Hi this is message 1");
console.log("Hi this is message 2");
