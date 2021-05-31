let allBox = document.querySelectorAll(".box");
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
root.addEventListener("click",handleEvent)
function handleEvent(event){
 allBox.forEach((ele,index)=>{
    ele.target.innerText = index + 1;
    setTimeout(()=>hide(event), 5000);
});
}


