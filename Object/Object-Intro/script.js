/**
 * --Object
 * ---What is Object
 */


let user = {
    //Properties 
    userName: "Ammar",
    userAge: 25,
    //Methods
    sayHello: function(){
        return `Hello ${this.userName}`
    }
}
let newUser = user;
newUser.userName = "Ahmed";
console.log(newUser.userName);
