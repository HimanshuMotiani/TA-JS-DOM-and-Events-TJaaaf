let form = document.querySelector("form")
let display = document.querySelector(".display")
let button = document.querySelector(".close")
let userInfo = {};
form.addEventListener("submit", handle);
function handle(event) {
    event.preventDefault();
    userInfo.name= event.target.elements.text.value
    userInfo.email= event.target.elements.email.value
    userInfo.gender= event.target.elements.gender.value
    userInfo.color= event.target.elements.color.value
    userInfo.range= event.target.elements.range.value
    userInfo.drone= event.target.elements.drone.value
    userInfo.terms= event.target.elements.terms.checked
    console.log(userInfo)

    document.querySelector("h1").innerText = `Hello ${userInfo.name}`;
    document.querySelector(".email").innerText = `Email: ${userInfo.name}`;
    document.querySelector(".gender").innerText = `You Love: ${userInfo.gender}`;
    document.querySelector(".color").innerText = `Color: ${userInfo.color}`;
    document.querySelector(".range").innerText = `Rating: ${userInfo.range}`;
    document.querySelector(".drone").innerText = `Book Genre: ${userInfo.drone}`;
    document.querySelector(".term").innerText = `You are ${userInfo.terms ? 'agreed' : 'not agreed'} to Terms and Conditions` ;

    display.classList.add("open");
}
button.addEventListener('click',function(){display.classList.remove('open')})

