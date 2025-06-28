const container = document.getElementById("container")
const remove = document.getElementById("clearGrid")
const resize = document.getElementById("resizeGrid")
let gridSide = 32

createDivs(gridSide)

function createDivs(side) {
    const totalDivs = side*side
    const sizeOfDivs=960/side
    for (i=0;i<totalDivs;i++){
        let newDiv = document.createElement('div')
        newDiv.style.width=`${sizeOfDivs}px`
        container.appendChild(newDiv)
    }
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
    event.target.style.backgroundColor="black"
    // container.style.backgroundColor="white"
})

container.addEventListener("mouseover",()=>{
    // event.target.style.backgroundColor="black"
    container.style.backgroundColor="white"
})

remove.addEventListener("click",removeChildren)
resize.addEventListener("click",()=>{
    getSide()
    removeChildren()
})



