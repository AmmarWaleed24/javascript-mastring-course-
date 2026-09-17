// create method
let user = {
    age: 20,

    doubleAge: function(){
        return this.age * 2;
    }
}

console.log(user.age);
console.log(user.doubleAge());
console.log("===================");
// State One
let copiedObj = Object.create(user);
console.log(copiedObj);
copiedObj.age = 30;
console.log(copiedObj.age);
console.log(copiedObj.doubleAge());
console.log("===================");

//State Two

let obj = Object.create({});
obj.age = 30;
obj.doubleAge = function(){
    return this.age * 2;
}

console.log(obj.age);
console.log(obj.doubleAge());
