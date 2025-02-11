/*
Create a constructor function named Car that takes a brand parameter. 
Inside the constructor, create an object property carInfo with a nested method named displayInfo. 
The displayInfo method should use the "this" keyword to access both the brand property of the object
and a parameter passed to the displayInfo method. 
Instantiate a Car object and call the displayInfo method.
*/
function car(brand){
    this.brand=brand;
    this.carInfo={
    displayInfo: ()=> {
        console.log(`Car Brand: ${this.brand}`)
    }
}
}
const mycar = new car("Toyota");
mycar.carInfo.displayInfo();
