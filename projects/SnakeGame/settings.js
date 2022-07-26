import { sickoModeLoop } from './sickoMode.js'
export let foodChange = " "
export let snakeChange = " "
let highContrast = document.querySelector('#highContrast')
let Monochromatic = document.querySelector('#Monochromatic')
let complementary = document.querySelector('#Complementary')
let tetradic = document.querySelector('#Tetradic')
let div = document.getElementById('settings')
let diff = document.querySelectorAll(".diff")
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let sicoMode = document.getElementById("sico-mode");
let mLabel = document.querySelector("#mediumLabel ");
let eLabel = document.querySelector("#easyLabel ")
let hLabel = document.querySelector("#hardLabel ")
let smLabel = document.querySelector("#sico-modeLabel ")
let dropBtn = document.querySelector(".dropbtn")



startBtn.onclick = function goodByeSettings() {
    if (hard.checked || medium.checked || easy.checked){
        div.style.display = "none";
    }else if (sicoMode.checked){
    sickoModeLoop()
    div.style.display = "none";
    }else if (!diff.checked){
     div.style.display = 'flex'
     alert("Please select a difficult!")
    } 
}


 

highContrast.addEventListener('click' , function changeHigh(){
    snakeChange = "#0057E9";
    foodChange = "#87E911";
    document.querySelector("#game-board").style.background = "#E11845";
    document.body.style.background = "radial-gradient(circle, rgba(0,0,0,1) 62%, rgba(135,233,17,1) 100%)";
    div.style.backgroundColor =  "#0057E9"
    div.style.borderColor = "black"
    document.querySelector("#settingsHeader").style.color = "#87E911"
    mLabel.style.color = "#87E911"
    eLabel.style.color = "#87E911"
    hLabel.style.color = "#87E911"
    smLabel.style.color = "#87E911"
    startBtn.style.backgroundColor = "black"
    startBtn.style.color = "white"
    dropBtn.style.backgroundColor = "black"
    dropBtn.stlye.Color = "#87E911"
    
})
Monochromatic.addEventListener('click' , function changeMono(){
    snakeChange = "#BBDFFA";
    foodChange = "#445BC1";
    document.querySelector("#game-board").style.backgroundColor = "#1727AE";
    document.body.style.backgroundColor = "#BBDFFA";
    document.body.style.background = "linear-gradient(90deg, rgba(68,91,193,1) 5%, rgba(187,223,250,1) 98%)"
})  
complementary.addEventListener('click' , function changeComp(){
    snakeChange = "#FC7307";
    foodChange = "#341C09";
    document.querySelector("#game-board").style.backgroundColor = "#D4E4F7";
    document.body.style.background = "linear-gradient(90deg, rgba(252,115,7,1) 26%, rgba(52,28,9,1) 86%)";
})  
tetradic.addEventListener('click' , function changetetra(){
    snakeChange = "#6768e1";
    foodChange = "#e3e26a";
    document.querySelector("#game-board").style.backgroundColor = "#f26379";
    document.body.style.background =  "linear-gradient(90deg, rgba(103,104,225,1) 3%, rgba(227,226,106,1) 97%)"
})  









 
 