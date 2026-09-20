/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const friend = myFriends[chosen - 1];

const {
  title,
  age,
  available,
  skills: [, secondSkill],
} = friend;

console.log(
  title,
  age,
  available === true ? "available" : "not available",
  secondSkill,
);
