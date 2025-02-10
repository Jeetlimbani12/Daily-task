/*
Write a JavaScript program with comments explaining the differences between
 let, var, and const in terms of variable declaration. 
 Include examples that showcase the scope of each type of variable and any restrictions they might have.
*/
function exampleVar() {
    if (true) {
        var name = "Jeet";  // Declaring a variable with 'var'
    }
    console.log(name);  // 'name' is accessible here because 'var' has function or global scope.
}

exampleVar();  
function exampleLet() {
    if (true) {
        let age = 30;  // Declaring a variable with 'let'
        console.log(age);  // Accessible here inside the block.
    }
    // console.log(age);  // Error: age is not defined outside the block because 'let' is block-scoped.
}

// exampleLet();  // Uncommenting this will throw an error due to 'age' being out of scope.


function exampleConst() {
    const city = "New York";  // Declaring a constant with 'const'
    console.log(city);  // Accessible here inside the block.
    
    // city = "Los Angeles";  // Error: Assignment to constant variable.
}