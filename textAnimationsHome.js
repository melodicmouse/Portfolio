//Header
const textHead = document.querySelector("#heading")
const headStr = textHead.textContent;
const splitHead = headStr.split("");
textHead.textContent = ""
//subHeader
const textSub = document.querySelector("#subHeading")
const subStr = textSub.textContent;
const splitSub = subStr.split("");
textSub.textContent = ""




for (let i = 0 ; i < splitHead.length; i++){
    textHead.innerHTML += "<span>" + splitHead[i] + "</span>";
    
}


let char  = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = textHead.querySelectorAll("span")[char];
   
        span.classList.add("fade")
        char++
        
        if(char === splitHead.length){
            complete()
            return;
        }
}




function complete(){
    clearInterval(timer);
    timer = null;
}


//sub
for (let i = 0 ; i < splitSub.length; i++){
    textSub.innerHTML += "<span>" + splitSub[i] + "</span>";
}

let charSub  = 0;
let timerSub = setInterval(onTickSub,50);

function onTickSub(){
    const spanSub = textSub.querySelectorAll("span")[charSub];
    spanSub.classList.add("fadeSub")
    
    charSub++
    if(charSub === splitSub.length){
        completeSub()
        return;
    }
}




function completeSub(){
    clearInterval(timerSub);
    timerSub = null;
}






