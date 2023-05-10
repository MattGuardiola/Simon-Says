let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickPattern = []
let level = 0
let started = false



document.addEventListener("keydown", function () {
    if (!started) {
        nextSequence()
        started = true
    }
})


function nextSequence() {
    userClickPattern = []
    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    document.querySelector("#" + randomChosenColor).classList.add("pressed")

    setTimeout(() => {
        document.querySelector("#" + randomChosenColor).classList.remove("pressed")
    }, 100)

    level++
    document.querySelector("h1").innerHTML = "Level " + level

}

function saveUserChoice () {
    let userchosenColor = this.id
    userClickPattern.push(userchosenColor)
    animatePress(userchosenColor)
    checkAnswer(userClickPattern.length - 1)
}

document.querySelector("#green").addEventListener("click", saveUserChoice)
document.querySelector("#red").addEventListener("click", saveUserChoice)
document.querySelector("#yellow").addEventListener("click", saveUserChoice)
document.querySelector("#blue").addEventListener("click", saveUserChoice)


function checkAnswer (currentlevel) {
    if (userClickPattern[currentlevel] === gamePattern[currentlevel]){

        if(userClickPattern.length === gamePattern.length) {
           setTimeout(() => {
               nextSequence()
           }, 1000)
       }
    } else {
        document.querySelector("body").classList.add("game-over")
        document.querySelector("h1").innerHTML = "GAME OVER"

        setTimeout(() => {
            document.querySelector("body").classList.remove("game-over")
            document.querySelector("h1").innerHTML = "Press Any Key to Restart"
        }, 1000)
        startOver()
    }
}




function animatePress (currentColor){
    document.querySelector("#" + currentColor).classList.add("pressed")

    setTimeout(() => {
        document.querySelector("#" + currentColor).classList.remove("pressed")
    }, 100)
}

function startOver() {
    level = 0;
    gamePattern = []
    started = false
}

