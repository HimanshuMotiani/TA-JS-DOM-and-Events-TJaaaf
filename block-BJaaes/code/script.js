let form = document.querySelector("form")
form.addEventListener("submit",handle);
let error = ""
function handle(event){
    event.preventDefault()
    console.dir(event.target)
let userName= event.target.elements.userName;
let name  = event.target.elements.name;
let email  = event.target.elements.email;
let number  = event.target.elements.number;
let password  = event.target.elements.password;
let confirmPassword  = event.target.elements.confirmPassword;
let errorMessage = {};
function  displayError(name) {
    form.elements[name].nextElementSibling.innerText = errorMessage[name]
    form.elements[name].classList.add("error");
}
function  displaySuccess(name) {
    form.elements[name].nextElementSibling.innerText = "";
    errorMessage[name] = ""
    form.elements[name].classList.remove("error");
    form.elements[name].classList.add("success");
}
if(userName.value.length < 5){
    errorMessage.userName = `Username can't be less than 5 characters.`
    displayError("userName");
}
else{
    displaySuccess("userName")
}
// userName.nextElementSibling.innerText = error;
if(!isNaN(name.value)){
    errorMessage.name = "You can't use number in the name field"
    displayError("name");
}else{
    displaySuccess("name")
}

if(!email.value.includes('@')){
    errorMessage.email = "Email must contains the symbol '@'"
    displayError("email");
}
else if(email.value.length < 7){
    errorMessage.email = "Email must be atleast 6 characters"
    displayError("email");
}
else{
    displaySuccess("email")
}

if(isNaN(number.value)){
    errorMessage.number = "Phone number can only contain numbers"
    displayError("number");
}
else if(number.value.length < 7){
    errorMessage.number = "Number must be atleast 6 characters"
    displayError("number");
}
else{
    displaySuccess("number")
}
 
if(password.value !== confirmPassword.value){
    errorMessage.confirmPassword = "Password and Confirm password does not match"
    displayError("confirmPassword")
}
else{
    displaySuccess("password")
    displaySuccess("confirmPassword")
}

}
