let first = document.querySelector(".first")
first.addEventListener("click",function () {
    first.style.backgroundColor=getRandomColor()
})
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let second = document.querySelector(".second")
second.addEventListener("mousemove",function () {
    second.style.backgroundColor=getRandomColor()
})