// get element/s from DOM

/*
let resultDiv = document.getElementById('result')
resultDiv.childNodes.forEach(node => {
    console.log(node.parentElement)
})
*/

let myDivs = document.getElementsByClassName('first')

for (let index = 0; index < myDivs.length; index++) {
    const element = myDivs[index];
    
    element.innerHTML = '<b>Text changed!</b> ' + index
    console.log(element.innerHTML) // innerText

    if (index == 1)
    {
        element.classList.remove('third')
        element.classList.add('redFont')
    }
}

//console.log('width: ', myDivs[1].offsetWidth)

/* function */

function drawBall(radius){
    let newElement = document.createElement('div')
        newElement.style.width = radius + 'px'
        newElement.style.height = radius + 'px'
        newElement.style.borderWidth = '1px'
        newElement.style.borderStyle = 'solid'
        newElement.style.borderColor = 'gray'
        newElement.style.borderRadius = '50%'

    return newElement
}

let snowman = document.getElementById('snowman')
/*
snowman.innerHTML = drawBall(150).outerHTML
snowman.innerHTML += drawBall(100).outerHTML
snowman.innerHTML += drawBall(50).outerHTML
*/

let firstBall = drawBall(150)
firstBall.style.borderColor = 'red'
firstBall.style.borderWidth = '3px'
firstBall.style.backgroundColor = 'green'
firstBall.innerText = 'this is ball!'

snowman.appendChild(firstBall)

snowman.appendChild(drawBall(100))
snowman.appendChild(drawBall(50))
