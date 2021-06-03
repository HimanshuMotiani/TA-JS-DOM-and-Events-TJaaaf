let input = document.querySelector("input");
let ul = document.querySelector("ul");
let allMovies = [{
    name:"Forest Gump",
    watched:"true"
},{
    name:"Titanic",
    watched:"true"
}]
input.addEventListener("keypress",function(event){
    if(event.key == 'Enter'){
        allMovies.push({
            name:event.target.value,
            watched:false
        })
        watchMovieList(event)
    }
});
function watchMovieList(event){
    ul.innerHTML = ""
allMovies.forEach(x=>{
let li = document.createElement("li")
li.classList.add("list");
li.innerText = x.name
var checkbox = document.createElement("input");
checkbox.style.margin = "0 1rem"
checkbox.setAttribute("type", "checkbox");
checkbox.checked = x.watched
li.prepend(checkbox);
let button = document.createElement("button")
button.innerText = "X";
button.classList.add("button")
li.append(button);
let hr = document.createElement("hr")
hr.style.border = "1px dashed white"

button.addEventListener("click",function(eve){
li.remove();
hr.remove();
})
ul.append(li,hr);
event.target.value = ""

})
}

