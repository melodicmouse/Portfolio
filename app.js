let whatsUp = document.getElementById("whatsUp");
let contactDiv = document.getElementById("contact");
let email = document.createElement("input")
email.type = "email"
let submit = document.getElementById("submit")


whatsUp.addEventListener("keypress" , ()=>{
    
    email.placeholder = "Type your email!"
    email.classList.add("email")
    contactDiv.appendChild(email)
    submit.classList.add("submit2")

} , {once:true})


