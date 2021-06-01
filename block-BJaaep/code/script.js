let allBox = document.querySelectorAll(".box");
let allBoxRight = document.querySelectorAll(".id");
let arr = [...allBoxRight]
// let rootTest = document.querySelectorAll(".boxes1");
let root = document.querySelector(".boxes1");

allBox.forEach((ele,index)=>{
        ele.addEventListener("click",function(event){
            handle(event,index)
        })
});
function handle(event,index){
    event.target.innerText = index+1;
    setTimeout(()=>hide(event), 5000);
}
function hide(event){
    event.target.innerText = "";
}
root.addEventListener("click",handleEvent);

function handleEvent(event){
    arr.forEach((x)=>{
        event.target.innerText = event.target.dataset.id;
        setTimeout(()=>hide(event), 5000);
    })
}
