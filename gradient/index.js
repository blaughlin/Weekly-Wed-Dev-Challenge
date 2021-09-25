// index.css
// Bernard Lauglin 9/25/201
// Weekly web dev challenge for scrimba 

totalColors = 2
addColorBtn = document.getElementById("addColor")
removeColorBtn = document.getElementById("removeColor")
let colorArray = []
let splitArray = []

addColorBtn.addEventListener("click", () => {
    totalColors += 1
    checkButtons()
    addColorPicker()
})

removeColorBtn.addEventListener("click", () => {
    removeColorPicker()
    totalColors -= 1
    checkButtons()
    changeBackground()
})

function checkButtons(){
    if (totalColors == 2){
        removeColorBtn.disabled = true
    } else {
        removeColorBtn.disabled = false
    }
}

//function update colors
function updateColors(){
    for(i = 1; i < totalColors; i++){
        document.getElementById(`picker-${i}`).value = String(colorArray[i])
    }
    for (i=1; i <= totalColors -1; i++){
        document.getElementById(`split${i}`).value = String(splitArray[i])
    }
}

// add color picker 
function addColorPicker(){
    let newColor = 
    `<div id="color${totalColors}Div">
        <label for="picker-${totalColors}">Color ${totalColors}:</label>
        <input id="picker-${totalColors}" oninput="changeBackground()" type="color" name="color${totalColors}"/>
    </div>
    <div id="split${totalColors - 1}Div">
        <label for="split${totalColors - 1}">Split:</label>
        <input value=90 type="range" oninput="changeBackground()" id="split${totalColors - 1}" name="split${totalColors - 1}" min="0" max="100">
    </div>`
    document.getElementById("gradient").innerHTML += newColor
    updateColors()
}

// removes color picker
function removeColorPicker(){
    let colorPicker = document.getElementById(`color${totalColors}Div`)
    colorPicker.remove()
    let split = document.getElementById(`split${totalColors -1}Div`)
    split.remove()

}
// Changes background gratient style
function changeBackground() {
    color1 = document.getElementById("picker-1").value
    color2 = document.getElementById("picker-2").value
    splitValue = document.getElementById("split1").value
    degree = document.getElementById("degree").value
    grad = `linear-gradient(${degree}deg`
     for (i=1; i <= totalColors -1; i++){
        splitArray[i] = document.getElementById(`split${i}`).value
    }
    for(i=1; i <= totalColors; i++){
        colorArray[i] = document.getElementById(`picker-${i}`).value
        if (i == totalColors) {
            grad += `, ${colorArray[i]}`
        } else {
            grad += `, ${colorArray[i]}, ${splitArray[i]}%`
        }
        
    }
    grad += ')'
    document.getElementById("gradient").style.background = grad
}

checkButtons()
changeBackground()