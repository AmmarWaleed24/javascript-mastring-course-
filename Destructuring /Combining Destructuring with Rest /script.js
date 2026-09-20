// Objects
const user = { id: 1, name: "Ali", role: "Admin", status: "Active" };
const { id, ...details } = user;
console.log(details); // { name: "Ali", role: "Admin", status: "Active" }

// Arrays
const numbers = [10, 20, 30, 40, 50];
const [head, ...tail] = numbers;
console.log(tail); // [20, 30, 40, 50]
