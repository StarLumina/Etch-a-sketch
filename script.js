const sontainer = document.getElementById(container)

function createDivs(side) {
    const totalDivs = side*side
    const sizeOfDivs=920/side
    for (i=0;i<totalDivs;i++){
        let newDiv = document.createElement('div')
        newDiv.style.width=`${sizeOfDivs}px`
        container.appendChild(newDiv)
    }
}

createDivs(16)