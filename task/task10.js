/*
Develop a script that uses an array to store the days of the week. 
Use array methods such as push, pop, shift, or unshift to modify the array. Print the array after each modification.
Additionally, use the indexOf method to find the index of a specific day.
*/
arr=["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
arr.push("Funday"); // Adds "Funday" at the end
console.log("After push:", arr); 

arr.pop(); // Removes "Funday" (the last element)
console.log("After pop:", arr); 

arr.shift(); // Removes "Monday" (the first element)
console.log("After shift:", arr); // ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// Using unshift() - Adds an element to the beginning of the array
arr.unshift("Holiday"); // Adds "Holiday" at the beginning
console.log("After unshift:", arr);

let index = arr.indexOf("Saturday")
if(index !== -1){
    console.log(`Element Saturday is found:${index}`);
}
else{
    console.log("Element is not found");
}