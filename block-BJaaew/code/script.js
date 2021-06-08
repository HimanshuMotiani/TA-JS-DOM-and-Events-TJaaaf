let allHouse = document.querySelector(".houses");
let allPeople  = document.querySelector(".people");
let searchPeople =document.querySelector(".search");
searchPeople.addEventListener("keyup",search)
got.houses.map((houses)=>{
    let div = document.createElement("div");
    div.innerText = houses.name
    div.style.display = "inline-block"
    div.style.background = "black";
    div.style.marginRight = "0.4rem";
    div.style.padding = "0.6rem";
    div.style.borderRadius = "5px";
    div.addEventListener("click",()=>{
        showHousePeople(event)})
    allHouse.append(div);
});

got.houses.forEach(house =>{
    house.people.forEach(people =>{
        let article = document.createElement("article");
        article.classList.add("flex-32","each-person")
        let img = document.createElement("img")
        img.src = people.image
        let h4 = document.createElement("h4")
        h4.innerText = people.name;
        let p = document.createElement("p")
        p.innerText = people.description;
        let button = document.createElement("button");
        button.innerText = "Know More!"
        article.append(img,h4,p,button)
        allPeople.append(article)
    })
})
function search(event){
    Array.from(allHouse.children).forEach(item =>{
        if(event.target.innerText == item.innerText){
            item.style.backgroundColor = "black";
            item.style.color = "White";
        }
        else{
            item.style.backgroundColor = "black";
            item.style.color = "White";
        }
    })
allPeople.innerText = "";
got.houses.forEach(house =>{
    house.people.forEach(people =>{
        if(people.name.toLowerCase().includes(event.target.value.toLowerCase())){
         article = document.createElement("article");
        article.classList.add("flex-32","each-person")
         img = document.createElement("img")
        img.src = people.image
         h4 = document.createElement("h4")
        h4.innerText = people.name;
         p = document.createElement("p")
        p.innerText = people.description;
         button = document.createElement("button");
        button.innerText = "Know More!"
        article.append(img,h4,p,button)
        allPeople.append(article)
        }
    })
})
}
function showHousePeople(event,index){
    Array.from(allHouse.children).forEach(item =>{
        if(event.target.innerText == item.innerText){
            item.style.backgroundColor = "white";
            item.style.color = "Black";
        }
        else{
            item.style.backgroundColor = "black";
            item.style.color = "white"; 
        }
    });
    allPeople.innerText = ""
    got.houses.forEach(house =>{
        if(house.name.toLowerCase().includes(event.target.innerText.toLowerCase())){
        house.people.forEach(people =>{
             article = document.createElement("article");
            article.classList.add("flex-32","each-person")
             img = document.createElement("img")
            img.src = people.image
             h4 = document.createElement("h4")
            h4.innerText = people.name;
             p = document.createElement("p")
            p.innerText = people.description;
             button = document.createElement("button");
            button.innerText = "Know More!"
            article.append(img,h4,p,button)
            allPeople.append(article)
            })
        }
   });
}

