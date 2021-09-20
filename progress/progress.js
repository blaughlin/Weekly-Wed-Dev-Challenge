let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] 
let currentNote 
let score = 0

let gameScore = document.getElementById('progress')
gameScore.innerHTML = score
noteDisplay = document.getElementById('notes')
console.log(noteDisplay)
let index = 0;
let interval = setInterval(function(){
    noteDisplay.innerHTML = notes[index]
    currentNote =  notes[index]
     console.log(notes[index++]);
     if(index == notes.length){
        clearInterval(interval);
     }
}, 3000)


const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
    console.log('Current note is ', currentNote, "-", key.dataset.note)
    if (currentNote == key.dataset.note) {
        console.log("Correct Key Pressed")
        score++
        gameScore.innerHTML = score

    }
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })}
