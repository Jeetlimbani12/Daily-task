/*
Create two objects user1 and user2 with similar properties. 
Write a function compareObjects that compares the properties of both objects. 
The function should log whether the objects are equal or not based on their properties. 
Test the function with user1 and user2
*/
const user1={
name:"Jeet",
age:21
}
const user2={
    name:"Jeet",
    age:21
}
function compareobjects(){
    if(user1.name == user2.name){
        console.log("same")
        return
    }
    else{
        console.log("not same")
        return
    }
}
compareobjects(user1,user2);