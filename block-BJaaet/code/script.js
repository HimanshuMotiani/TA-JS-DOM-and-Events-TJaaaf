let input = document.querySelector("input");
let ul = document.querySelector("ul");
input.addEventListener("keypress",function(event){
    if(event.key == 'Enter'){
console.log(event.target.value);
let li = document.createElement("li")
li.classList.add("list");
li.innerText = event.target.value;
var checkbox = document.createElement("INPUT");
checkbox.style.margin = "0 1rem"
checkbox.setAttribute("type", "checkbox");
li.prepend(checkbox);
let button = document.createElement("button")
button.innerText = "X";
button.classList.add("button")
li.append(button);
let hr = document.createElement("hr")
hr.style.border = "1px dashed white"
ul.append(li,hr);
event.target.value = ""

button.addEventListener("click",function(eve){
li.remove();
hr.remove();
})
}
})
