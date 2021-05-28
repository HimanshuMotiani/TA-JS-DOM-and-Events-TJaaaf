// let boxes = document.querySelector(".box");
// let number = document.querySelector(".number");
let allBox = document.querySelector(".boxes");
for(i=0;i<500;i++){
    var div = document.createElement("div")
    div.classList.add("box");
    div.innerText = Math.floor((Math.random() * 500) + 1);
    allBox.append(div) 
}
let test = document.querySelectorAll(".box")
allBox.addEventListener("mousemove",function() {
    test.forEach(x=>{
        x.style.backgroundColor = getRandomColor();
        x.innerText = Math.floor((Math.random() * 500) + 1);
    })
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}