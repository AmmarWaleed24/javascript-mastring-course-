//First challenge
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers.split("").filter(e=>{
    return isNaN(parseInt(e)) ? e : "";
}).join("");

console.log(ign);

//second challenge 


let mix = "A13BS2ZX";

//return the multiplied numbers only 

let solutionTwo = mix.split("").filter(e=>{
    return !isNaN(parseInt(e));
}).map(e=>{
    return e * e;
})

console.log(solutionTwo);
