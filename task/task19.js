/*
Create two objects named originalObject and modifiedObject. Assign the same properties to both objects. 
Modify one property in modifiedObject and observe how it affects the other object due to reference.
Log the properties of both objects to the console.
*/
const originalobject={
name:"Jeet",
age:21
}
const modifiedobject=originalobject;
modifiedobject.age= 22

console.log(originalobject)
console.log(modifiedobject)
/*
why this happen?
1.JavaScript objects are reference types. When modifiedObject is assigned the value of originalObject, 
it doesn’t create a new object; instead, both variables now refer to the same object in memory.
2.As a result, any change made to the object through one variable (like modifiedObject.age = 22) will 
reflect in the other variable because they both point to the same memory reference.
*/