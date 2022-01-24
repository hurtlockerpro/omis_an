
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


/* restoran menu */ 

let data = [
    {
        category: 'breakfast',
        title: 'breakfast 1',
        description: 'breakfast description 1',
        price: 10,
        image: 'https://picsum.photos/200/200?random=1'
    },
    {
        category: 'breakfast',
        title: 'breakfast 2',
        description: 'breakfast description 2',
        price: 20,
        image: 'https://picsum.photos/200/200?random=1'
    },
    {
        category: 'breakfast',
        title: 'breakfast 3',
        description: 'breakfast description 3',
        price: 30,
        image: 'https://picsum.photos/200/200?random=1'
    },
    {
        category: 'lunch',
        title: 'lunch 1',
        description: 'lunch description 1',
        price: 30,
        image: 'https://picsum.photos/200/200?random=1'
    },
    {
        category: 'lunch',
        title: 'lunch 2',
        description: 'lunch description 2',
        price: 10,
        image: 'https://picsum.photos/200/200?random=1'
    }
]

function generateButton(options)
{
    let btn = document.createElement('button')
    btn.classList.add('btn', 'btn-primary', 'm-1')
    if (options.hasOwnProperty('title')) btn.innerText = options.title
    // data-category [
    /*   dataset: [{
            name: '',
            value: 'value'
        }]
    ]*/
    if (options.dataset.length > 0)
    {
        options.dataset.forEach(dataset => {
            btn.setAttribute('data-' + dataset.name, dataset.value)
        })
    }
    btn.addEventListener('click', event => {
        // step 1 : filter
        let category = event.target.dataset.category
        let cards = filterMenuCards(category)
        // step 2. show cards

        showMenuCards(cards)
    })

    return btn

}

function showMenuButtons(data){ // ['lunch', 'breakfast']
    
    data.forEach(menuItem => {
        let options = {
            title: menuItem, 
            dataset: [
                {
                    name: 'category',
                    value: menuItem
                }
            ]
        }
        menuItems.appendChild(generateButton(options))

    })
}

function generateMenuCard(item){
    return document.createRange().createContextualFragment(`
        <div class="card m-3" style="max-width: 450px;float: left;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${ item.image }" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${ item.title + ' - Price: ' +  item.price.toFixed(2) } EUR</h5>
                    <p class="card-text">${ item.description }</p>
                </div>
                </div>
            </div>
        </div>
    `)
}

function filterMenuCards(category){
    return data.filter(dataItem => dataItem.category == category)
}


let menuItems = document.getElementsByClassName('menuItems')
if (typeof menuItems != 'undefined') menuItems = menuItems[0]

let menuCards = document.getElementsByClassName('menuCards')
if (typeof menuCards != 'undefined') menuCards = menuCards[0]


function getMenuItems(){
    let items = []
    data.forEach(menuItem => {
        if (!items.includes(menuItem.category))
        {
            items.push(menuItem.category)
        }
    })

    return items
}

// generate menu buttons in html
let menus = getMenuItems()
showMenuButtons(menus)


function showMenuCards(dataItems){

    menuCards.innerHTML = ''

    dataItems.forEach(menuItem => {
        menuCards.appendChild(generateMenuCard(menuItem))
    })
}

showMenuCards(data)