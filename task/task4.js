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