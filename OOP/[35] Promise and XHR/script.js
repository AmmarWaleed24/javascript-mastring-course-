//Promise with XHR

let url = "https://api.github.com/users/elzerowebschool/repos";

const getData = (apiLink) => {
  return new Promise((res, rej) => {
    let req = new XMLHttpRequest();
    req.open("GET", apiLink);
    req.send();

    req.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        res(JSON.parse(this.responseText));
      } else {
        rej(Error("Data Not Found"));
      }
    };
  });
};

//get data and loop on it
getData(url)
  .then((res) => {
    for (let value of res) {
      console.log(value.full_name);
    }
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(console.log("Operation Done"));
