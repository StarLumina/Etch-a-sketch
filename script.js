const sontainer = document.getElementById(container)

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
}

container.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="black"
    // container.style.backgroundColor="white"
})
container.addEventListener("mouseover",()=>{
    // event.target.style.backgroundColor="black"
    container.style.backgroundColor="white"
})



createDivs(50)
