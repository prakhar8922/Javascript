const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeLeft=document.querySelector('#time-left')
const score=document.querySelector('#score')

let result=0
let hitPosition
let currentTime=60
let timerId=null
let countDownTimerId = setInterval(countDown, 1000)

function randomSquare(){
    squares.forEach(square =>{
        // The classList.remove() method is used to remove the "mole" class from all squares in the squares array, in case there was a previously set mole square that needs to be reset.
        square.classList.remove('mole') 
    })
    let randomSquare=squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')//The selected square's classList is updated to add the "mole" class, indicating that it is the current mole square.
    hitPosition=randomSquare.id
}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id==hitPosition){
            result++
            score.textContent=result
            hitPosition=null
        }
    })
})

function moveMole(){//This function sets a timer that repeatedly calls the randomSquare() function at a fixed interval of 500 milliseconds, which causes the mole to move randomly between squares.
    timerId=setInterval(randomSquare,500)//The return value of setInterval() is assigned to the timerId variable, which allows the interval timer to be stopped later by calling clearInterval(timerId) when the game is over
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent=currentTime

    if(currentTime==0){
        clearInterval(countDownTimerId)//The clearInterval() method is used to stop the countDownTimerId interval timer, which updates the countdown timer every second
        clearInterval(timerId)//The clearInterval() method is also used to stop the timerId interval timer, which moves the mole around the grid.
        alert('Game Over!Your final score is '+result)

    }
}
