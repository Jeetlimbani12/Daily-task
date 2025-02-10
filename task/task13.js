/*
Develop a script that employs the reduce function to find the sum of all elements in an array. 
Print the original array and the final sum.
*/
arr=[1,2,3,4,5]
let output= arr.reduce((acc,curr)=>{
    return acc+curr;
})
console.log("Original Array:",arr);
console.log("Sum of array:",output);

