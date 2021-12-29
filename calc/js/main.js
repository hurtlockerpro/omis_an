let div = document.getElementById('test')
let btn = document.querySelector('button[type="button"]')
/*
function showLog() 
{
    console.log('clicked')
}
*/

let colors = ['red', 'green', 'blue']
let index = 0
div.addEventListener('click', function(){
    console.log('clicked')
    div.style.backgroundColor = colors[index++]
    if (index > colors.length - 1) index = 0
})

btn.addEventListener('dblclick', function(){
    console.log('dblclicked')
})
