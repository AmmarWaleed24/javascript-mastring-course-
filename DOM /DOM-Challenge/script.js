

let mainDiv = document.createElement("div");
let h2 = document.createElement("h2");
let p = document.createElement('p');
let hr = document.createElement("hr");
p.innerText = "Hello from para";

h2.innerText = "Hello from h2";

mainDiv.classList.add("product");
mainDiv.appendChild(h2);
mainDiv.appendChild(p);

let counter = 100;

for(let i = 0; i < counter; i++){
    let printCount = document.createElement('span');
    printCount.innerText = i + 1;  
    let clonedDiv = mainDiv.cloneNode(true);
    clonedDiv.appendChild(printCount);
    document.body.appendChild(clonedDiv);
    
    if(i < counter - 1 ) {

    document.body.appendChild(hr.cloneNode(true));
    }

}
