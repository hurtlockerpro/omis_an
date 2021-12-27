

// var 
let x = '10'

x = 100

let varString = 'xbsdf'
let varNumber = 10
let varBoolean = true // false
let varUndefined // undefined
let varNan = 'NaN' 
let varNUll = null 
let varObject1 = [] // object
let varObject2 = {} // object

/*
multi row 
comment
*/

console.log('result: ', x + 20)

x = 150
// && (and):
// true + true + true + ... => true
// true + false + false + ... => false


// || (or): 
// false + false + true + ... => true
// false + false + false + ... => false 

//    true        false
if (x >= 100 && x < 150) // true
{
    console.log('x is bigger and equal than 100') 
} else if (x == 150 || x == 160){
    console.log ('x is 150/160')
} /*else if (x == 160){
    console.log ('x is 160')
} */ else {
    console.log ('x is smaller than 100')
} 


if (typeof varString == 'string')
{
    console.log('varString: is string')
} 

if (typeof varUndefined == 'undefined')
{
    console.log ('varUndefined is undefined')
}
// index      0       1       2        3
let cars = ['audi', 'bmw', 'citroen', null, true]

console.log(cars[10])

cars[3] = 'new car'

console.log(cars[3])
console.log(cars)
//                      true
//                                          increment
//                                          decrement index--    
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element)
}


let colors = {
    red: 'red', // #121212
    blue: 'blue',
    black: 'black',
    all: {
        color1: 'green',
        color2: 'yellow',
        red: 'redred'
    },
    others:[
        { // 0
            color:'color11'
        },
        { // 1
            color:'color12'
        }
    ]
}

console.log('color is : ', colors.blue)
console.log('color is : ', colors.red)
console.log('color is : ', colors.all.color1)


console.log('color is : ', colors.others[1].color)

for (let index = 0; index < colors.others.length; index++) {
    const element = colors.others[index].color;
    console.log('index=', index, 'value=', element )
}
//Array
console.log(Object.keys(colors))
console.log(Object.values(colors))

Object.keys(colors).forEach(function(key){
    console.log(key)
})

console.log(Object.entries(colors))

Object.entries(colors).forEach(function(arr){

    if (typeof arr[1] == 'string')
    {
        console.log('key=', arr[0], 'value=', arr[1])
    } 
    else if (typeof arr[1] == 'object' && arr[0] == 'all')
    {
        Object.entries(arr[1]).forEach(function(item){
            console.log('key=', item[0], 'value=', item[1])
        })
    }
    else if (typeof arr[1] == 'object' && arr[0] == 'others')
    {
        arr[1].forEach(function(item){
            console.log('value=', item.color)
        })
    }
}) 

//------

function getSumm(x = 10, y = 15){
    // logic
    console.log('result: ', x + y)
}

function getSumm2(x, y, ...data){
    // logic
    console.log('result (2): ', x + y)

    let result = 0
    if (data.length > 0)
    {
        for (let index = 0; index < data.length; index++) {
            result += data[index]
        }
    }
    return x + y + result
}

getSumm()

let result2 = getSumm2(4, 4) // return
console.log(result2)


let fn = () => console.log('Hello From function')
let fn2 = function () { 
    return console.log('Hello From function') 
}
fn()
fn2()


let fn3 = item => item // return item
console.log(fn3(' --- Hello'))


let fn4 = (item1, item2) => {
    console.log(item1, item2)

    return item1 + item2
}
let newResult = fn4('Hello ', 'from arguments (fn4)')
console.log(newResult)


// ----- 
// contects

let fnArrow = () => console.log(this)

function fnOld() {
    console.log(this)
}

fnArrow()
fnOld()

// --- 
let firstname = 'Vladimir'
//" Hello firstname "

//'Hello ' + firstname 
// + firstname 

console.log(
`
Hello ${ firstname },

Hello ${ 2 + 2 }
`)


// multiply table

let rows = 10
let cols = 10

let table = generateTable()
for (let colIndex = 1; colIndex <= cols; colIndex++) {
    //console.log('col: ', colIndex)
    let row = generateTableRow()
    for (let rowIndex = 1; rowIndex <= rows; rowIndex++) {
        console.log(rowIndex, '*', colIndex, '=', (rowIndex * colIndex))
        //console.log(generateTableCell(rowIndex * colIndex).outerHTML)
        row.appendChild(generateTableCell(rowIndex * colIndex))
    }
    //console.log(row)
    table.appendChild(row)
}
console.log(table.outerHTML)
//document.body.innerText = 'Hello from javascript'
document.body.innerHTML = '<b>Hello from javascript</b>'

function generateTag(tagName, data){
    let obj = document.createElement(tagName)
    obj.innerHTML = data
    return obj
}

function generateTable(data = undefined){
    let table = document.createElement('table')
    if (typeof data != 'undefined') table.innerHTML = data
    return table
}

function generateTableRow(data = undefined){
    let tr = document.createElement('tr')
    if (typeof data != 'undefined') tr.innerHTML = data
    return tr
}

function generateTableCell(data){

    //return `<td>${ data }</td>`
    let td = document.createElement('td')
    //td.style.backgroundColor = 'red'
    //td.style.fontSize = '14px'
    td.innerText = data

    return td
}

// 1. return td object 
let newCell = generateTableCell('new <b>cell</b>')
newCell.style.color = 'green'
// 2. generate row -> td object  
let newRow = generateTableRow(newCell.outerHTML)
newRow.style.color = 'red'
console.log(newRow)

//console.log(generateTag('tr', newCell.outerHTML))