import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import {update as updateFood, draw as drawFood, scoreCounter} from './food.js'
import {outsideGrid} from './grid.js'
let lastRenderTime = 0
let gameOver = false;
const gameBoard = document.getElementById('game-board')



function main(currentTime) {
    if(gameOver){
        let gameAlert = document.createElement("div");
        let button = document.createElement('button')
        let message = document.createElement('p');
        
        document.body.appendChild(gameAlert)
        gameAlert.appendChild(button)
        gameAlert.appendChild(message)
        
        message.classList.add("message")
        button.classList.add("ok")
        gameAlert.classList.add("alertMessage")

        button.innerText= "New Game"
        message.innerText ="You lost final score: " + scoreCounter;
       
        gameAlert.style.display = 'block'
        
        button.addEventListener("click", ()=>{
            window.location="/"
})
    return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
   if (secondsSinceLastRender < 1 / SNAKE_SPEED()) return 
    lastRenderTime = currentTime;
    update()
    draw()

}

window.requestAnimationFrame(main)

function update(){
updateSnake()
updateFood()
checkDeath()
}

function draw(){
gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

