// Bad: Passing entire object and repeatedly referencing `user.`
function displayUser(user){
  console.log(`${user.name} is ${user.age} years old.`);
}

// Good: Destructuring in parameters
function displayUser({ name, age }){
  console.log(`${name} is ${age} years old.`);
}
