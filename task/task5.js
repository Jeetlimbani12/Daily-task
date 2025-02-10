/*
Create a program that demonstrates variable hoisting in JavaScript.
 Declare variables using both var and let within functions and blocks, and
 then attempt to access these variables before and after their declarations. 
Explain the behavior observed in the comments.
*/
// Example 1: Hoisting with var
function hoistWithVar() {
    console.log(x); // Undefined due to hoisting, but not initialized
    var x = 5;
    console.log(x); // 5 after the initialization
}

hoistWithVar();

// Example 2: Hoisting with let
function hoistWithLet() {
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
    console.log(y); // This won't be reached due to the error
}

hoistWithLet();

// Example 3: Hoisting in block scope with var
{
    console.log(z); // Undefined due to hoisting, but not initialized
    var z = 20;
    console.log(z); // 20 after the initialization
}

console.log(z); // 20 because 'var' is function-scoped, not block-scoped

// Example 4: Hoisting in block scope with let
{
    console.log(w); // ReferenceError: Cannot access 'w' before initialization
    let w = 30;
    console.log(w); // This won't be reached due to the error
}

