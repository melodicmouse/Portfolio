const textHead = document.querySelector("#blog")
const headStr = textHead.textContent;
const splitHead = headStr.split("");
textHead.textContent = ""

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

