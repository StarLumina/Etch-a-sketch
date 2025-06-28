const container = document.getElementById("container")
const remove = document.getElementById("clearGrid")
const resize = document.getElementById("resizeGrid")
let gridSide = 32
let opacity = 0

createDivs(gridSide)

function createDivs(side) {
    const totalDivs = side*side
    const sizeOfDivs=960/side
    for (i=0;i<totalDivs;i++){
        let newDiv = document.createElement('div')
        newDiv.style.width=`${sizeOfDivs}px`
        container.appendChild(newDiv)
    }
    opacity=0
}

function removeChildren(){
    container.innerHTML = ""
    createDivs(gridSide)
}

function getSide(){
    let tempGrid=parseInt(prompt())
    if ((Number.isInteger(tempGrid))&&(tempGrid<100)){
        gridSide=tempGrid
    } else {
        alert("Please enter a valid number under 100")
    }
}

container.addEventListener("mouseover",event=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    event.target.style.opacity=opacity
    opacity+=0.07
    event.target.style.backgroundColor="#"+randomColor
})

container.addEventListener("mouseover",()=>{
    container.style.backgroundColor="white"
    container.style.opacity=1
})

remove.addEventListener("click",removeChildren)
resize.addEventListener("click",()=>{
    getSide()
    removeChildren()
})



