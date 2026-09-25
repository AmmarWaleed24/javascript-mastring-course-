/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

//Recieve data api from server
const jsonObject = `{"username": "ammar", "age":25}`;

//convert data to javascript object
const myObject = JSON.parse(jsonObject);

//print before modifying data
console.log(myObject); //{username: 'ammar', age: 25}

//modify data
myObject["username"] = "osama";
myObject["age"] = 30;

//print data to check
console.log(myObject); //{username: 'osama', age: 30}

//convert data to string to send it back to server
const myObjectBackToServer = JSON.stringify(myObject);
