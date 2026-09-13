
//map 

let swappedCases = "elZERo";
let invertedNumbers = [1,-1,-20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";


// First Problem
let sw = swappedCases.split("").map((ele)=>{

return ele.toUpperCase() === ele ? ele.toLowerCase() : ele.toUpperCase();
})

console.log(swappedCases);
console.log(sw);

// Second Problem

let invertedNums = invertedNumbers.map((ele)=>{
    return -ele;
})

console.log(invertedNumbers);
console.log(invertedNums);

// Third Problem 

let ignoredNums = ignoreNumbers.split("").map((ele)=>{
 
return isNaN(parseInt(ele)) ? ele : "";
}).join("")

console.log(ignoredNums);

