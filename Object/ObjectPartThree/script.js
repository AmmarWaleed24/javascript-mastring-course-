/**
 * --Object
 * ---Nested Object and Trainings 
 */


let myVar = "userEmail";

let user = {
    //Properties 
    userName: "Ammar",
    userAge: 25,
    "country of": "Egypt",
    100 : "Number",
    userEmail: "aw@gmail.com",
    skills: ["HTML", "CSS", "JS"],
    available: false,
    address: {
        ksa: "Riyadh",
        egypt: {
            first: "Cairo",
            second: "GiZa"
        }
    },

    //Methods
    sayHello: function(){
        return `Hello ${this.userName}`
    },
    checkAv: function(){
        return this.available === true ? "Available" : "Not Available";
    }
}


console.log(user.skills);
console.log(user.skills.join(" | "));//           HTML | CSS | JS
console.log(user.address.egypt.first);//          Cairo
console.log(user["address"].egypt.first);//       Cairo
console.log(user["address"]["egypt"]["first"]);// Cairo
console.log(user.checkAv());//                    Not Available

/**
 *      $ Note Regarding "this" keyword $
 * --If you did not type this in the following code: The interprenter 
 * --will search for "available" variable in the global scope 
 * -- this means if there in the global scopr [outside the] variable named "availabe"
 * --function will check on it
 *   '    checkAv: function(){
        return this.available === true ? "Available" : "Not Available";
    }'
 */

