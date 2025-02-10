/*
Create a program that uses a while loop to iterate through an array of strings. 
Inside the loop, use forEach to print each string with an appended exclamation mark. 
The loop should terminate once the length of the current string exceeds 8 characters. 
Comment on the differences between while and forEach in this context.
*/
let strings = ["apple", "banana", "cherry", "blueberry", "kiwi"];
let i = 0;

while (i < strings.length) {
    strings[i].split('').forEach(char => console.log(char + '!'));
    
    if (strings[i].length > 8) {
        break; 
    }
    
    i++;
}
