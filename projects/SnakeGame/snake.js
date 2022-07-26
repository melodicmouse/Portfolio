let easy = document.querySelector("#easy")
let medium = document.querySelector("#medium")
let hard = document.querySelector("#hard")
let sicoMode = document.querySelector("#sico-mode")

import { snakeChange  } from "./settings.js"

import { getInputDirection } from "./input.js";
export let SNAKE_SPEED= () => {
    if(easy.checked){
        return 4;
    } else if (medium.checked){
        return  8;
    } else if( hard.checked){
        return  15;
    } else if (sicoMode.checked){
        return 40;
    }
};

let snakeBody = [
    {x: 11 , y: 11}
]
let newSegments = 0

export function update(){
    addSegments()

    const inputDirection = getInputDirection();
for (let i = snakeBody.length - 2; i >= 0; i--){
    snakeBody[i + 1] = {...snakeBody[i]}
}

snakeBody[0].x += inputDirection.x
snakeBody[0].y += inputDirection.y
 }

export function draw(gameBoard){
snakeBody.forEach(segment =>{
    let snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.backgroundColor = snakeChange;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement)
})

}

export function expandSnake(amount){
newSegments += amount;
}

export function onSnake(position , { ignoreHead = false} = {}){
    return snakeBody.some((segment, index) =>{
        if(ignoreHead && index === 0) return false
      return equalPositions(segment, position)  
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead : true})
}

function equalPositions(pos1 , pos2){
   return pos1.x === pos2.x && pos1.y === pos2.y
   
}

function addSegments(){
    for (let i = 0; i< newSegments; i++){
        snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length -1]}
    }

    newSegments = 0
}