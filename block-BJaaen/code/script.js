let client = document.querySelector(".client");
let initialValue = 0;
let clientCount = document.querySelector(".client-count");
let refresh = document.querySelector("button");
let cpuCount = document.querySelector(".cpu-count");
let cpu = document.querySelectorAll(".select");

let result = document.querySelector("h4");

let clientPick = "";
clientCount.innerText = initialValue
cpuCount.innerText = initialValue
client.addEventListener("click", (event) => {
    Array.from(event.currentTarget.children).forEach(x=>{
        if(x.innerText == event.target.innerText){
            event.target.style.color = "red";
        }
        else{
            x.style.color = "black"
        }
    })
    // event.target.style.color = "red";
    clientPick = event.target.innerText;
    let colorCpu = cpu[Math.floor(Math.random() * cpu.length)];
    Array.from(cpu).forEach(x=>{
        if(x.innerText == colorCpu.innerText){
            colorCpu.style.color = "blue";
        }
        else
        x.style.color = "black"
    })
    var cpuPick = colorCpu.innerText;
    if (clientPick == cpuPick) {
        result.innerText = "You tie"
    }
    else if ((clientPick == "Rock" && cpuPick == "Scissor")) {
        result.innerText = "You Win"
        clientCount.innerText = Number(clientCount.innerText) + 1;
    }
    else if ((clientPick == "Scissor" && cpuPick == "Rock")) {
        result.innerText = "You Lost"
        cpuCount.innerText = Number(cpuCount.innerText) + 1
    }
    else if ((clientPick == "Paper" && cpuPick == "Scissor")) {
        result.innerText = "You Lost"
        cpuCount.innerText = Number(cpuCount.innerText) + 1
    }
    else if ((clientPick == "Scissor" && cpuPick == "Paper")) {
        result.innerText = "You Win";
        clientCount.innerText = Number(clientCount.innerText) + 1;
    }
    else if ((clientPick == "Rock" && cpuPick == "Paper")) {
        result.innerText = "You Lost";
        cpuCount.innerText = Number(cpuCount.innerText) + 1;
    }
    else if ((clientPick == "Paper" && cpuPick == "Rock")) {
        result.innerText = "You Win"
        clientCount.innerText = Number(clientCount.innerText) + 1;
    }
})


refresh.addEventListener("click", (event) => {
    clientCount.innerText = initialValue
    cpuCount.innerText = initialValue
})




