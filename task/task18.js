/*
Create an object called book with properties title, author, and pages. 
Add a method called displayInfo to the object, which logs a message using the properties to
display information about the book. 
Instantiate the object with sample values and call the displayInfo method.
*/
const book={
    title:"xyz",
    author:"cnc",
    pages:100,
    DisplayInfo: function(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}
book.DisplayInfo();