/**
 * --Object
 * ---Dot Notation bs Bracket Notation
 * ---Dynamic Property Name
 */


let myVar = "userEmail";

let user = {
    //Properties 
    userName: "Ammar",
    userAge: 25,
    "country of": "Egypt",
    100 : "Number",
    userEmail: "aw@gmail.com",

    //Methods
    sayHello: function(){
        return `Hello ${this.userName}`
    }
}
//                  Dot Notation bs Bracket Notation

console.log(user.userName);//       Dot Notation
console.log(user["country of"]);//  Bracket Notation

//                  ==================


//                 Dynamic Property
/**
 * You can not access the Dynamic Property by "Dot Notaion"
 * You can     access the Dynamic Property by "Bracket Notaion"
 */

 console.log(user.userEmail);//  [aw@gmail.com]
 console.log(user.myVar);//      [Undefined]
 console.log(user[myVar]);//     [aw@gmail.com]
