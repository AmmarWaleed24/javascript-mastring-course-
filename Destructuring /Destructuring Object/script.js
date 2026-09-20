/**
 * Object destructuring extracts values by matching property names.
 */

//Basic Syntax
const user = { name: "sarah", age: 25, country: "egypt" };
const { name, age } = user;
console.log(name);

//Renaming Variables
//--Assign properties to variable names that differ from the object keys:
const { name: userName, age: userAge } = user;
console.log(userName);

//Default values
const settings = { theme: "dark" };

const { theme, fontSize = "16px" } = settings;
console.log(fontSize); // "16px" (fallback used)

//Nested Object destructuring
//--Unpack properties from deeply nested structures:
const myUser = {
  id: 101,
  profile: {
    avatar: "avatar.png",
    social: { twitter: "@sarah_dev" },
  },
};

const {
  id,
  profile: {
    avatar,
    social: { twitter },
  },
} = myUser;

console.log(twitter);
