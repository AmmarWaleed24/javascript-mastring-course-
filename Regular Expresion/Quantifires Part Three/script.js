/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

//Ends with "**"
console.log(/ing$/gi.test(myString)); // true
console.log(/lz$/gi.test(names)); //     true

//Starts with "**"
console.log(/^\d/gi.test(myString)); //   false
console.log(/^\d/gi.test(names)); //      true

//Followed by something
console.log(names.match(/\d\w{5}(?=z)/gi)); //(3) ['1Osama', '2Ahmed', '5Gamal']

//Not Followed by something
console.log(names.match(/\d\w{8}(?!z)/gi)); // ['3Mohammed']
