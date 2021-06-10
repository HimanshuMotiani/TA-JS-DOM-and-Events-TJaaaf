var h1 = document.getElementsByTagName('h1')[0],
    start = document.querySelector('.start'),
    stop = document.querySelector('.stop'),
    clear = document.querySelector('.clear'),
    seconds = 0, minutes = 0, hours = 0,
    time,timeStart;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.innerText = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" 
    + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" 
    + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    time = setTimeout(add, 1000);
}
timer();


/* Start button */
start.addEventListener("click",timer)

/* Stop button */
stop.addEventListener("click",()=>{
    clearTimeout(time);
})

/* Clear button */
clear.onclick = function() {
    h1.innerText = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
function clockStart() {
    timeStart = setInterval(()=> {
               date = new Date()
               let hour = date.getHours();
               let minutes = date.getMinutes();
               let seconds = date.getSeconds();
               document.getElementById("demo").innerHTML = hour + ":"+ minutes + ":" + seconds;
  }, 1000);
}
function clockStop() {
    clearInterval(timeStart)
}


