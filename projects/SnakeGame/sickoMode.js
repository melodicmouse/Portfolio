
let div = document.getElementById('settings')
export function sickoModeLoop(){
   
    div.style.display = "none";
   let firstMessage = document.createElement("div")
   let firstBtn = document.createElement("button")
   let secondBtn = document.createElement("button")
   let text = document.createElement("p")
   let img = document.createElement("img")
   let btnDiv = document.createElement("div")
   let imgDiv = document.createElement("div")
   

  
   
   secondBtn.classList.add('ok2')
   firstBtn.classList.add('ok2')
   firstMessage.classList.add('alertMessage2')
   text.classList.add('message2')
   img.classList.add("img")
   img.src = "https://cdn.shopify.com/s/files/1/0016/2014/8291/products/premium-luster-photo-paper-framed-poster-_in_-black-18x24-transparent-61a7cd0876fcb_800x.png?v=1638404012"
   btnDiv.classList.add('btnDiv')
   imgDiv.classList.add('imgDiv')
   
   
   document.body.appendChild(firstMessage)
   firstMessage.appendChild(btnDiv)
   firstMessage.appendChild(firstBtn)
   firstMessage.appendChild(secondBtn)
   firstMessage.appendChild(text)
   firstMessage.appendChild(img)
   
   firstMessage.style.display = "block"


  
   text.innerText = "Youve selected sicko mode, please select a difficulty that is actually playable"
   
   firstBtn.innerText = "Ok"
   secondBtn.innerText ="I wanna play Sico Mode"

   firstBtn.addEventListener('click' , ()=>{ window.location = "/"})
   secondBtn.addEventListener('click' , ()=>{
    text.innerText = "No you dont"
    secondBtn.innerText = "Yes I do."
    secondBtn.addEventListener("click" , ()=>{
        text.innerText = "Serieously, no you dont..."
        secondBtn.innerText = "Serieously, yes I do."
        secondBtn.addEventListener("click" , ()=>{
            btnDiv.appendChild(firstBtn)
                btnDiv.append(secondBtn)
            text.innerText = "Now there's no need to get sassy"
            secondBtn.innerText = "I wanna play Sicko Mode"
            secondBtn.addEventListener("click" , ()=>{
                text.innerText = "I hear you, but trust me. Sicko Mode is dumb, I dont know why I even made it an option. You should pick another difficulty."
                secondBtn.innerText = "I wanna play Sico Mode"
                secondBtn.addEventListener("click" , ()=>{
                    text.innerText = "At this point I feel like your antagonizing me..."
                    secondBtn.innerText = "This bit is getting old..."
                    secondBtn.addEventListener("click" , ()=>{
                        text.innerText = "WELL GEEEEEEZZ...I thought you came here to play snake not give me notes on comedy"
                        secondBtn.innerText = "....really old..."
                        secondBtn.addEventListener("click" , ()=>{
                            text.innerText = "Ok fine, you caught me, I never wrote the code for Sicko Mode...happy now?"
                            secondBtn.innerText = "Call bluff"
                            secondBtn.addEventListener("click" , ()=>{
                                text.innerText = "......"
                                secondBtn.innerText = "-.-'"
                                secondBtn.addEventListener("click" , ()=>{
                                    text.innerText = "Ok fine, but know you've spent more time reading these prompts than you will playing the game..."
                                    secondBtn.innerText = "FINALLY"
                                    secondBtn.addEventListener("click" , ()=>{
                                        secondBtn.classList.add("bigBtn")
                                        firstBtn.classList.add("bigBtn2")
                                        text.innerText = "One last chance to walk away...."
                                        secondBtn.innerText = "Your career oppertunites are dwindling by the second"
                                        secondBtn.addEventListener("click" , ()=>{
                                            text.innerText = "Fine...click start"
                                            secondBtn.innerText = "Start"
                                            secondBtn.addEventListener("click" ,()=> {
                                                firstMessage.style.display = "none"
                                                
                
                                                return 
                                            })
                                            return 
                                        })
                                        return 
                                    })
                                    return
                                })
                                return
                            })
                            return
                        })
                        return
                    })
                    return
                })
                return
            })
            return
        })
        return
    })
    return
   })
   
return 
}