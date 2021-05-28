let boxes = document.querySelector(".box");
let number = document.querySelector(".number");
let allbox = document.querySelector(".boxes");
for(i=0;i<500;i++){
    let div = document.createElement("div")
    div.classList.add("box");
    div.style.backgroundColor = getRandomColor();
    let h1 = document.createElement("h1");
    h1.innerText = Math.floor((Math.random() * 500) + 1);
    div.addEventListener("mousemove",function() {
        div.style.backgroundColor = getRandomColor();
        h1.innerText = Math.floor((Math.random() * 500) + 1);
    });
    div.append(h1);
    allbox.append(div);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}