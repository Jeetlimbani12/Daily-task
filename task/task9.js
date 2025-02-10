/*
Create a program that declares variables with different data types: 
a number (age), a string (name), and a boolean (isStudent).
Perform operations like concatenating the name with a greeting, 
converting the age to a string, and combining the boolean value with a string to form a sentence. Print the results.
*/

let age = 25;               
let name = "John Doe";      
let isStudent = true;  

let greeting = "Hello, " + name + "! Welcome to the program.";
console.log(greeting);      

// Converting the age (number) to a string
let ageString = age.toString();
console.log("Age as a string: " + ageString);  
//combining the boolean value with a string to form a sentence.
let studentStatus = "Is the person a student? " + isStudent;
console.log(studentStatus); 