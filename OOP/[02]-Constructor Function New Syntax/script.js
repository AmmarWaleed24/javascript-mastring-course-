//Constructor Function
//--New Syntax

class User {
  constructor(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary;
  }
}

let newUser1 = new User(104, "Ammar", 10000);

//[01] => [instanceof, object.constructor] check prototype[blueprint]
console.log(newUser1 instanceof User); // true
console.log(newUser1.constructor === User); // true

