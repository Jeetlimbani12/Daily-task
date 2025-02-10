/*
Create a program that utilizes the filter function to extract even numbers from an array of integers. 
Print the original array and the filtered array containing only even numbers.
*/

arr=[1,2,3,4,5,6,7,8,9,10]
let output = arr.filter( num =>{
    if(num%2 ==0)
    {
        return true;
    }
    else{
        return false;
    }
}
)
console.log("Original Array:",arr);
console.log("Filtered array:",output);