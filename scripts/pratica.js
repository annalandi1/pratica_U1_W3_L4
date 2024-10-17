

const tombola = []
for(let i = 1; i < 77; i++){
    tombola.push(i)
}


const createTombolaCells = function () {
    const tombolaSection = document.getElementById("tombola")
    for (let i = 0; i < tombola.length; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = tombola[i]
        tombolaSection.appendChild(cell)
    }
}

const selectRandomNumber = function(){
    if (tombola.length === 0) return
    
    const tombolaIndex = Math.floor(Math.random() * tombola.length)
    const randomNumber = tombola[tombolaIndex]

    const cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++) {
        if(parseInt(cells[i].textContent) === randomNumber) {
            cells[i].classList.add("selected")
        }   
    }
    tombola.splice(tombolaIndex, 1)

}

createTombolaCells()

const button = document.getElementById("random-button")
button.addEventListener("click", selectRandomNumber)







