/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromise = new Promise((res, rej) => {
  let employees = ["ammar", "ali"];
  if (employees.length === 4) {
    res(employees);
  } else {
    rej(Error("Number of employees is not 4"));
  }
});

myPromise.then((res) => {
  res.length = 2;
  return res;
});

myPromise.then((res) => {
  res.length = 1;
  return res;
});

myPromise.then((res) => {
  console.log(`Choosen Employee is ${res}`);
});

myPromise.catch((rej) => {
  console.log(rej);
});

myPromise.finally(() => {
  console.log("Operation is done");
});
