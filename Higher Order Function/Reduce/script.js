/*
--Reduce 
---Method excutes a reducer functiuon on each element of the array
---Return the restult in a single output value
*/

//Without initial value
//accumelator = 10[first array value]
let nums = [10, 20, 15, 30];

// let add = nums.reduce((acc, current, index, array)=>{
//     console.log(`The accumelated value is:    [${acc}]`);//10
//     console.log(`The Current Number is:       [${current}]`);
//     console.log(`The Current Number Index is: [${index}]`);
//     console.log("=======================");
//     return acc + current;
// })

// console.log(add);


//With initial value
//accumelator = [initial value]
let add = nums.reduce((acc, current, index, array)=>{
    console.log(`The accumelated value is:    [${acc}]`);//5
    console.log(`The Current Number is:       [${current}]`);
    console.log(`The Current Number Index is: [${index}]`);
    console.log("=======================");
    return acc + current;
}, 5)

console.log(add);
