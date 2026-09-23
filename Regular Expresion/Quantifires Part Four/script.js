/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript")); //    replace the first @ meet
console.log(txt.replaceAll("@", "JavaScript")); // replace the All @ meet

/*
---Regular expresion gives you extra space to replace more coplicated patterns
*/

console.log(txt.replaceAll(/@/ig, "JavaScript")); //same

