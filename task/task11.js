/*
Write a JavaScript program that uses the map function to transform an array of numbers. 
Square each element in the array and create a new array with the squared values.
 Print both the original and transformed arrays.
*/
arr=[2,3,4,5]
let output = arr.map(num=>num*num)
console.log("Original Array:",arr);
console.log("After modified array:",output);