import { foodChange} from './settings.js'
import { onSnake , expandSnake } from "./snake.js"
import {randomGridPostion} from './grid.js'
let easy = document.querySelector("#easy")
let medium = document.querySelector("#medium")
let hard = document.querySelector("#hard")
let sicoMode = document.querySelector("#sico-mode")
let food = getRandomFoodPosition()


export let EXPANSION_RATE = () =>{
    if(easy.checked){
        return 1;
    } else if (medium.checked){
        return 3;
    } else if( hard.checked){
        return  5;
    } else if (sicoMode.checked){
        return 15;
    }
};


export let scoreCounter = 0;

export function update(){
  if (onSnake(food)){
    expandSnake(EXPANSION_RATE())
    food = getRandomFoodPosition()
   scoreCounter++;
  }
}


export function draw(gameBoard){
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.backgroundColor = foodChange;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
let newFoodPosition
while(newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPostion()
}
return newFoodPosition
}