/*
Create an object called student with properties name, age, and an array grades. 
Add a method named calculateAverage to the object, which calculates and returns the average of the grades. 
Iterate through the object properties using a loop and log each property and its value. 
Call the calculateAverage method and log the result.
*/
const student={
    name:"Jeet",
    age:"21",
    grades:[100,90,80],
    calculateAverage:function(){
        const average1=this.grades.reduce((sum, grade) => sum + grade, 0)
        return average1/this.grades.length;
    }
}
for (let key in student) {
    // Check if the property is not the method
 
    if (typeof student[key] !== 'function') {
        console.log(`${key}: ${student[key]}`);
    }
    
}
const average= student.calculateAverage();
console.log(`Average Marks:${average}`);