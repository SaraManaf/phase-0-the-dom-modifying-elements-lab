// Write your code here!
let main = document.getElementById("main");
main.remove();
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Iman is the champion";
document.body.append(newHeader);