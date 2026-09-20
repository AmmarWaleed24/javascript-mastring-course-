/**
 * Array destructuring extracts values by matching element position (index).
 *
 */

//basic syntax
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // "Red", "Green"

//Skipping Items
const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;
console.log(first, third); // 10, 30

//Default Values
const scores = [95];
const [math, english = 100] = scores;
console.log(english);

//swapping variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);//2 1
