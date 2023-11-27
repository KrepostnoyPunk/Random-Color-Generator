const containerEl=document.querySelector(".container")

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div')
    colorContainerEl.classList.add('color-container')
    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls=document.querySelectorAll('.color-container')
//console.log(colorContainerEls);

generateColor()

function generateColor() {
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode=randomColor()
        colorContainerEl.style.backgroundColor="#"+newColorCode
        colorContainerEl.innerText="#"+newColorCode
    })
}

function randomColor() {
    const characters = "0123456789abcdef"
    const colorCodeLength=6;
    let colorCode=""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNumber=Math.floor(Math.random() * characters.length);
        //console.log(randomNumber);
        colorCode+=characters.substring(randomNumber, randomNumber+1)
        //console.log(colorCode, randomNumber);
    }
    return colorCode
}












