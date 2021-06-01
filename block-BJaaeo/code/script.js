let buttons = document.querySelector(".buttons");
let input = document.querySelector("input");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
console.log(buttons);
buttons.addEventListener("click",(event)=>{
    console.log(event.target)
    input.value += event.target.innerText
});
equal.addEventListener("click",()=>{
    let result =eval(input.value)
    input.value= result;
})
clear.addEventListener("click",()=>{

    input.value= "  ";
})
