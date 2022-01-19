
let loops = document.getElementById('loops')
let btn = document.querySelector('button')
let result = document.getElementById('result')

// recursion -> for/forEach
let forLoop = (startLoop, endLoop = 10) => {

    if (startLoop < endLoop)
    {
        // logic 
        console.log('iteration: ', startLoop)  
        
        if (startLoop == 0)
        {
            // TODO
            result.appendChild(generateBox())
        } else {
            let newDiv = generateBox()
            newDiv.style.float = 'left'

            result.appendChild(newDiv)
        }

        // x++ -> 1. variable 2. +1
        // ++x -> 1. +1 2. variable 
        forLoop(++startLoop, endLoop)
    }else {
        return;
    }
}

// forLoop(0, 6)
let generateBox = () => {
    let box = document.createElement('div')
    box.classList.add('box')

    return box
}


btn.addEventListener('click', event => {

    result.innerHTML = ''

    let totalLoops = parseInt(loops.value)
    if (totalLoops > 0) forLoop(0, totalLoops)
})

//
// COUNTER
//


let startCounter = 10
let currentCounter = startCounter

function decrease(){
    // todo then less than 0
    return currentCounter--
}
function increase(){
    // todo then grater than 10/startCounter
    return currentCounter++
}
function reset(){
    return currentCounter = startCounter
}

function run(){
    let number = document.getElementById('number')

    let intervalID = setInterval(function(){
        if (currentCounter <= 0)
        {
            alert('Counter is finished work')
            clearInterval(intervalID);
        } else {
            decrease()
        }
        console.log('to finish: ', currentCounter)
        number.innerText = currentCounter

    }, 1000)
}

let btnReset = document.getElementById('btnReset')
let btnDecrease = document.getElementById('btnDecrease')
let btnIncrease = document.getElementById('btnIncrease')


btnReset.addEventListener('click', event => {
    reset()
})
btnDecrease.addEventListener('click', event => {
    decrease()
})
btnIncrease.addEventListener('click', event => {
    increase()
})

//run()
let slides = document.querySelectorAll('.slide')
let currentSlideIndex = 0

function getCurrentSlideIndex(){

    if (currentSlideIndex > slides.length - 1) currentSlideIndex = 0
    return currentSlideIndex
}


function runSlides(){

    setInterval(function(){
        // increase index
        
        console.log(slides[getCurrentSlideIndex()].id)
        /*slides.forEach((slide, index) => {
            if (index == getCurrentSlideIndex()){
                slide.style.zIndex = slides.length
            } else {
                slide.style.zIndex = "0"
            }
        })*/

        slides.forEach((slide, index) => {
            if (index == getCurrentSlideIndex()){
                slide.classList.add('moveSlide')
            } else {
                slide.classList.remove('moveSlide')
            }
        })
        
        currentSlideIndex += 1

    }, 5000)
}

runSlides()