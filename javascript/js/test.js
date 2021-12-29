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
    newElement.width = radius + 'px'

}