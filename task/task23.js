/*
Create a constructor function called Person that takes name and age as parameters and assigns them as properties. 
Add a method greet to the prototype of the constructor, which logs a greeting message using the person's name. 
Instantiate two objects using the Person constructor and call the greet method on both.
*/
// Constructor function Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding the greet method to the prototype of Person
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
}

// Instantiate two objects using the Person constructor
const person1 = new Person("Jeet", 21);
const person2 = new Person("harsh", 22);

// Calling the greet method on both objects
person1.greet();  // Output: Hello, my name is Jeet!
person2.greet();  // Output: Hello, my name is Aditi!
