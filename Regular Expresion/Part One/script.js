/*global console, alert, prompt*/

/*
  Regulat Expression Syntax
  /Pattern/Attributes
  Search | Replace | Match | Split | Test
  Attributes List
  [ i ] => Case Insensetive
  [ g ] => Global Search
  [ m ] => Multi Line Search
  Brackets Use
  [...] Character
  [^...] Not Character
  [a-z] Range Small Letters
  [A-Z] Range Capital Letters
  [0-9] Range Numbers
  [^0-9] Not Range
  [A-g] = Range[A-Z] Range[a-g]
  [0-9a-z] Double Range
*/

/*
--Part One
---(X|Y) => x or y
---[0-9] => 0 to 9
---[^0-9]=> Any character not 0 to 9
---practice
 *******
 --Part Two
 ---[a-z]
 ---[^a-z]
 ---[A-Z]
 ---[^A-Z]
 ---[abc]
 ---[ABC]
 *******
 ---Part Three
 ---character classes
   Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.

  *******
---Part Four
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)

  *******

*/
//---------Part One----------//

//[01]
let str1 = "com org info io";
let str1Re = /(com|io)/g;
console.log(str1.match(str1Re));
//[02]
let str2 = "0123456789";
let str2Re = /[0-4]/g;
console.log(str2.match(str2Re));
//[03]
let str3 = "abc1234defg456";
let str3Re = /[^0 -9]/g;
console.log(str3.match(str3Re));
//[*]
let practice = "os1 os1os os2 os8 os8os";
let practiceRe = /os[5-9]os/g;
console.log(practice.match(practiceRe));

//---------Part Two----------//
let myString = "AaBbcdefG123!234%^&*";

let rg1 = /[a-z]/g;
console.log(myString.match(rg1));

let rg2 = /[^a-z]/g;
console.log(myString.match(rg2));

let rg3 = /[A-Z]/g;
console.log(myString.match(rg3));

let rg4 = /[^A-Z & ^(*|%|!)]/gi;
console.log(myString.match(rg4));

let rg5 = /[*|@|!|#|%|^]/g;
console.log(myString.match(rg5));

let rg6 = /[a-zA-Z]/g;
console.log(myString.match(rg6));

//---------Part Three----------//

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

let dot = /./g;
console.log(email.match(dot));

let word = /\w/g;
console.log(email.match(word));

let notWord = /\W/g;
console.log(email.match(notWord));

let digit = /\d/g;
console.log(email.match(digit));

let notDigit = /\D/g;
console.log(email.match(notDigit));

console.log(email.match(/\w@\w.(org|com)/g));

let whitespace = email.match(/\s/g);
console.log(whitespace);

let notWhitespace = email.match(/\S/g);
console.log(notWhitespace);

//---------Part Four----------//
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo @spam";
//get word starts with spam
console.log(names.match(/\bspam/gi)); //(2) ['Spam', 'Spam']
//get spam word starts with number
console.log(names.match(/\b\dspam/gi)); //(3) ['1Spam', '2Spam', '3Spam']
//get word starts with spam or ends with spam
console.log("1spam".match(/(spam\b)/gi));
//get sapm word starts with char and ends with char
console.log(names.match(/\Dspam\D/gi)); //['Aspamo']

//test method
//--starts with spam or ends with spam
let re = /(\bspam|spam\b)/gi;
console.log(re.test("1spam")); // true
console.log(re.test(names)); // true
