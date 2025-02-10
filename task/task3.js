/*
Develop a JavaScript script that utilizes nested loops (either for or while).
 The outer loop should iterate from 1 to 3, and the inner loop from 1 to 5. 
 Use break to exit the inner loop when the current iteration count of the inner loop is equal to the outer loop's current iteration count.
 Print the values of both loop variables to demonstrate the breaking condition.
*/
for (let i = 1; i <= 3; i++) {  // Outer loop iterates from 1 to 3
    for (let j = 1; j <= 5; j++) {  // Inner loop iterates from 1 to 5
        console.log(`Outer loop i: ${i}, Inner loop j: ${j}`);
        
        if (i === j) {
            console.log(`Breaking inner loop when i = ${i} and j = ${j}`);
            break;
        }
    }
}