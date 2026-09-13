/*
--Filter
---method creates a new array
---with all elements that pass teh test 
*/

let friends = ["Ahmed", "Sameh", "Sayed", "Asmma", "Amgad", "Israa"];


// return ceratain friends

let filteredFriends = friends.filter((el)=>{
    return el.startsWith("A");
})

console.log(filteredFriends);
