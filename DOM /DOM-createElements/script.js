/**
 * ---DOM
 * --createElement
 * --createComment
 * --createTextNode
 * --createAtribute
 * --appendChild
 */

let myElement = document.createElement("div");
let myPara = document.createElement("p");
let comment = document.createComment("This is comment");
let myText = document.createTextNode("Hello Ammar From Text Node");
let myAttr = document.createAttribute("data-costom");

myPara.appendChild(comment)
myPara.appendChild(myText);
myPara.setAttributeNode(myAttr);

myElement.appendChild(myPara);

document.body.appendChild(myElement);
