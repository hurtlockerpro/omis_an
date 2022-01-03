let inputResult = document.getElementById('inputResult')
//inputResult.value = '1dfgwe526256er'

let btns = document.getElementsByClassName('btn')
//console.log(btns)

let allowButtons = [8, 37, 39]
let removeDoublesFrom = [111, 106, 109, 107, 110]

//let mathActions = [111, 106, 109, 107, 110]
//let allowButtons2 = mathActions.concat(allowButtons)

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', event => {
        console.log(event.target.innerText)
        
        if (event.target.innerText == '=')
        {
            getResult()
        } else if (event.target.innerText == 'CE') {
            emptyResult()
        } else {

            // TODO homework
            let btnValue = parseInt(event.target.innerText)
            if (isNaN(btnValue)){
                removeLastDouble(event.target.innerText)
            }


            if (inputResult.value.length == 1 && inputResult.value == '0')
            {
                inputResult.value = ''
            }
            inputResult.value += event.target.innerText  
        }

        inputResult.focus()
    })
});

function getResult(){
    inputResult.value = eval(inputResult.value)
}

function emptyResult(){
    inputResult.value = 0
}

inputResult.addEventListener('keydown', event => {
    console.log(event.key, '=', event.keyCode)

    if (event.keyCode == 13)
    {
        event.preventDefault()
        getResult()
    }else if ((event.keyCode < 48 || 
        event.keyCode > 57 && event.keyCode < 96 || 
        event.keyCode > 105) && !allowButtons.includes(event.keyCode)
        )
    {
        event.preventDefault()
        console.log('something...')
    } else if (isNaN(event.key) && removeDoublesFrom.includes(event.keyCode)) {
        removeLastDouble(event.key)
    }
})
/*
inputResult.addEventListener('keydown', event => {
    console.log('keydown')
})
inputResult.addEventListener('keypress', event => {
    console.log('keypress')
    console.log(2+2)
})*/

function removeLastDouble(currentSymbol){
    let inputValue = inputResult.value.toString().trim()
    let lastSymbol = inputValue.substring(inputResult.value.length - 1)
    if (isNaN(lastSymbol) == false) return;

    console.log('lastsymbol', lastSymbol)
    if (lastSymbol != currentSymbol || lastSymbol == currentSymbol)
    {
        inputResult.value = inputValue.substring(0, inputValue.length - 1) + currentSymbol 
    }
}