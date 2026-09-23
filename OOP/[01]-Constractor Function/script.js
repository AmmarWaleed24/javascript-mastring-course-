//Constractor Function

/*
---before constractor if we want to increase 
----salary we will do it for every object manwally
*/
const userOne = {
  id: 101,
  username: "ali",
  salary: 7000,
};

const userTwo = {
  id: 102,
  username: "jamal",
  salary: 5000,
};

const userThree = {
  id: 103,
  username: "ahmed",
  salary: 4000,
};

//With constractor function
//---you can increase the salary for all employees from on place inside the constractor fn
function User(id, username, salary) {
  this.id = id;
  this.username = username;
  this.salary = salary + 1000; //add 1000 for All Employees
}

let newUser1 = new User(104, "Ammar", 10000);
let newUser2 = new User(105, "Sayed", 11000);
let newUser3 = new User(106, "Mohammed", 12000);

console.log(newUser1, newUser2, newUser3);
