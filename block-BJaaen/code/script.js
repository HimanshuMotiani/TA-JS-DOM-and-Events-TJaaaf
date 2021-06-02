let client = document.querySelector(".client");
let initialValue = 0;
let clientCount = document.querySelector(".client-count");
let refresh = document.querySelector("button");
let cpuCount = document.querySelector(".cpu-count");
let cpu = document.querySelectorAll(".select");
let clientText = document.querySelector(".client-text");
let cpuText = document.querySelector(".cpu-text");

let result = document.querySelector("h4");

let clientPick = "";
clientText.style.color = "red";
cpuText.style.color = "blue";
clientCount.innerText = initialValue
cpuCount.innerText = initialValue
client.addEventListener("click", (event) => {
    Array.from(event.currentTarget.children).forEach(x => {
        if (x.innerText == event.target.innerText) {
            event.target.style.color = "red";
        }
        else {
            x.style.color = "black"
        }
    })
    // event.target.style.color = "red";
    clientPick = event.target.innerText;
    var colorCpu = cpu[Math.floor(Math.random() * cpu.length)];
    Array.from(cpu).forEach(x => {
        if (x.innerText == colorCpu.innerText) {
            colorCpu.style.color = "blue";
        }
        else
            x.style.color = "black"
    })
    var cpuPick = colorCpu.innerText;
    if (clientPick == cpuPick) {
        result.innerText = "YOU TIE"
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
    else if ((clientPick == "Rock" && cpuPick == "Scissor")) {
        result.innerText = "YOU WON"
        clientCount.innerText = Number(clientCount.innerText) + 1;
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;

    }
    else if ((clientPick == "Scissor" && cpuPick == "Rock")) {
        result.innerText = "YOU LOST"
        cpuCount.innerText = Number(cpuCount.innerText) + 1;
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
    else if ((clientPick == "Paper" && cpuPick == "Scissor")) {
        result.innerText = "YOU LOST"
        cpuCount.innerText = Number(cpuCount.innerText) + 1
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
    else if ((clientPick == "Scissor" && cpuPick == "Paper")) {
        result.innerText = "YOU WON";
        clientCount.innerText = Number(clientCount.innerText) + 1;
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
    else if ((clientPick == "Rock" && cpuPick == "Paper")) {
        result.innerText = "YOU LOST";
        cpuCount.innerText = Number(cpuCount.innerText) + 1;

        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
    else if ((clientPick == "Paper" && cpuPick == "Rock")) {
        result.innerText = "YOU WON"
        clientCount.innerText = Number(clientCount.innerText) + 1;
        clientText.innerText = ` --- ` + clientPick;
        cpuText.innerText = ` --- ` + cpuPick;
    }
})


refresh.addEventListener("click", (event) => {
    clientCount.innerText = initialValue
    cpuCount.innerText = initialValue
    clientText.innerText =""
    cpuText.innerText = ""
    result.innerText = ""
    Array.from(cpu).forEach(x => {
            x.style.color = "black"
    })
    Array.from(client.children).forEach(x=>{
        x.style.color = "black"
    })
})




