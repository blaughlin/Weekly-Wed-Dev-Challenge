
function changeBackground() {
    color1 = document.getElementById("picker-1").value
    color2 = document.getElementById("picker-2").value
    splitValue = document.getElementById("split").value
    degree = document.getElementById("degree").value

    console.log(`linerar-gradient(${color1}, ${color2})`)
    document.getElementById("gradient").style.background = 
    `linear-gradient(${degree}deg, ${color1}, ${splitValue}%, ${color2})`
}

changeBackground()