/*
--Reduce function Challenge
*/

let Words = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let Chars = ["E", "@", "@", "L", "Z", "@", "@", "E", "@", "R", "O"];

//[1] Return The Biggest Word

let theBiggestWord = Words.reduce((acc, current)=>{
    return acc.length > current.length ? acc : current;
})

console.log(`The Biggest Word Is: ${theBiggestWord}`);

console.log("--------------");

//Remove @
let removedCharsValeu = Chars.reduce((acc, current)=>{
    return current !=="@" ? acc + current : acc + "";
})


console.log(removedCharsValeu);
