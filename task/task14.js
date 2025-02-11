/*
Create an object called person with properties name and age. 
Add a method named introduce to the object, which logs a message using 
the "this" keyword to reference the name and age properties. 
Call the introduce method to introduce the person.
*/
const person ={
    name: "jeet limbani",
    age : 21,
    introduce: function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person.introduce();
