/*
Create an object called originalPerson with properties name, age, and an array hobbies. 
Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson and deepCopyPerson. 
Modify the hobbies array in one of the copies and observe how it affects the original object.
 Log the properties of all three objects. 
*/
// Original person object
const originalPerson = {
    name: "Jeet",
    age: 30,
    hobbies: ["Reading", "Travelling", "Swimming"]
};

// Shallow copy using Object.assign()
const shallowCopyPerson = Object.assign({}, originalPerson);

// Deep copy using JSON.parse(JSON.stringify())
const deepCopyPerson = JSON.parse(JSON.stringify(originalPerson));

// Modify the hobbies array in shallowCopyPerson
shallowCopyPerson.hobbies.push("Cycling");

// Log all three objects
console.log("Original Person:", originalPerson);
console.log("Shallow Copy Person:", shallowCopyPerson);
console.log("Deep Copy Person:", deepCopyPerson);
