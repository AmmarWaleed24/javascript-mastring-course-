// Assign Method

let obj1 = {
    prop1: 1,
    meth1: function () {
    return this.prop1;
  }
}

let obj2 = {
    prop2: 2
}

let obj3 = {
    prop3: 3

}
let targetObject = {};
 targetObject = Object.assign(targetObject, obj1, obj2, {prop4: 4});

console.log(targetObject);
console.log(targetObject.prop1);
console.log(targetObject.meth1());
