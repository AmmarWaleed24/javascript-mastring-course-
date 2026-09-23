//static property and static functions
//--- [01] property can't be accessed by the class constructor but the clss it self
//--- [02] without static keyword even the class itself won't recognize it
class User {
  static count = 0;
  constructor(id, username, salary) {
    //properties
    this.id = id;
    this.u = username;
    this.s = salary;
    this.msg = () => {
      return `Hello ${this.u}`;
    };
    User.count++;//add to counter when a new user created
  }
  //fns
  changeUsername(newUsername) {
    this.u = newUsername;
  }
  //static functions
  static countMembers() {
    return `${this.count} Members created`;
  }
}

let newUser = new User(1, "ammar", 20000);
console.log(User.countMembers()); // 1 members created
