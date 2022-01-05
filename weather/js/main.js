
// e94a06c22c14c9ab3059f89372eb2541
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// GET ? key = value & key = value &
/*
document.querySelector('button[type="button"]')
    .addEventListener('click', event => {
        console.log('click')

        fetch('./test.html')
            .then(response => response.text())
            .then(data => {
                console.log('data ok')
                console.log(data)

                document.querySelector('div[class="result"]')
                .innerHTML = data
            })
    })
*/


let temp = document.getElementById('temp')
let city = document.getElementById('city')
let description = document.getElementById('description')
let btnSwitch = document.getElementById('switch')

let settings = {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    q: 'Tallinn', // {city name}
    appid: 'e94a06c22c14c9ab3059f89372eb2541', // {API key}
    mode: 'json',  // xml and html
    units: 'standart' // standard, metric and imperial
}    

let generateUrl = () => {
    let url = settings.url
    //delete settings.url // delete url from settings

    let filterSettings = []
    Object.entries(settings).forEach(item => {
        if (item[0] == 'url')
        {
            url = item[1]
        } else {
            filterSettings.push(item[0] + "=" + item[1]) 
        }
    })
    //console.log(filterSettings)
    
    return url + '?' + filterSettings.join('&')
}

let getData = () => {

    let url = generateUrl()
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name)

            temp.innerText = data.main.temp
            city.innerText = data.name
            description.innerText = parseWeatherData(data.weather)
        }) 

}

function parseWeatherData(data){
    let description = ''
    if (data.length >= 1)
    {
        data.forEach(item => {
            description += item.main + ' ' + item.description
        })
    }
    return description
}
 
//settings.q = 'New York'
console.log(generateUrl())

getData()