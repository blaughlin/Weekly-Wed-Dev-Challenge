let workTime
let workTimeSeconds

let pomoderoTime = 25
let shortBreak = 1
let longBreak = 10
let timer
let seconds = 0
let pad = 00
let timerStarted = false

let timeDisplay = document.getElementById("time-display")
let workButton = document.getElementById("work-btn")
let shortBreakButton = document.getElementById("short-break-btn")
let longBreakButton = document.getElementById("long-break-btn")
let pauseButton = document.getElementById("pause-btn")
let resetButton = document.getElementById("reset-btn")
let isPaused = false

if (!timerStarted) {
    pauseButton.disabled = true
}

workButton.addEventListener("click", function() {
    if (!timerStarted) {
        startTimer(pomoderoTime, "25:00")
        workButton.style.background = "rgba(255,105,180,0.5)"
    }
})

shortBreakButton.addEventListener("click", function() {
    if (!timerStarted) {
        startTimer(shortBreak, "1:00")
        shortBreakButton.style.background = "rgba(255,105,180,0.5)"
    }
})

longBreakButton.addEventListener("click", function() {
    if (!timerStarted) {
        startTimer(longBreak, "10:00")
        longBreakButton.style.background = "rgba(255,105,180,0.5)"
    }
})

pauseButton.addEventListener("click", function(){
    isPaused = !isPaused
    if (isPaused) {
        pauseButton.innerHTML = "Resume"
    } else {
        pauseButton.innerHTML = "Pause"
    }
    console.log("pause button pressed")
})

resetButton.addEventListener("click", function() {
    enableButtons()
    timerStarted = false
    clearInterval(timer)
    timeDisplay.innerHTML = "0:00"
    pauseButton.disabled = true
    if (isPaused){
        pauseButton.innerHTML = "Pause"
        isPaused = false
    }

})

function startTimer(minutes, displayText){
    timerStarted = true
    pauseButton.disabled = false
    disableButtons()
    timerStarted = true
    timeDisplay.innerHTML = displayText
    workTime = minutes
    seconds = 0
    workTimeSeconds = minutes * 60
    countDownSeconds()
}

function countDownSeconds(time){
    timer = setInterval(update, 1000)
    let elapsedTime = 0
    function update(){
        if (!isPaused) {
            if (seconds == 0) {
                seconds = 60
                workTime -= 1
            }
            seconds -= 1
            workTimeSeconds -= 1
            elapsedTime += 1
            if (seconds < 10) {
                result = (pad+seconds.toString()).slice(-pad.length)
            } else{
                result = seconds
            }
            if (workTimeSeconds == 0) {
                clearInterval(timer)
                console.log("DONE!")
                enableButtons()
                timerStarted = false
                pauseButton.disabled = true
                }
            timeDisplay.innerHTML =  workTime + ":" + result
            }
        }
}



function disableButtons(){
    workButton.disabled = true
    shortBreakButton.disabled = true
    longBreakButton.disabled = true
}

function enableButtons() {
    workButton.disabled = false
    workButton.style.background = "white"
    shortBreakButton.disabled = false
    shortBreakButton.style.background = "white"
    longBreakButton.disabled = false
    longBreakButton.style.background = "white"

}
