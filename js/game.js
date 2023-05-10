let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickPattern = []
let level = 0


function nextSequence() {
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


function animatePress (currentColor){
    document.querySelector("#" + currentColor).classList.add("pressed")

    setTimeout(() => {
        document.querySelector("#" + currentColor).classList.remove("pressed")
    }, 100)
}

document.addEventListener("keydown", nextSequence)


function checkAnswer (currentlevel) {
    if (userClickPattern[currentlevel] === gamePattern[currentlevel]){
        console.log(userClickPattern)
        console.log(gamePattern)
        if(userClickPattern === gamePattern) {
           setTimeout(() => {
               nextSequence()
           }, 1000)

       }


    } else {
        console.log("fail")
    }
}

