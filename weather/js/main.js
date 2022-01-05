
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
let btnSwitch = document.getElementById('flexSwitchCheckChecked')
let unitLabel = document.getElementById('unitLabel')
let icon = document.getElementById('icon')

let settings = {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    q: 'Tallinn', // {city name}
    appid: 'e94a06c22c14c9ab3059f89372eb2541', // {API key}
    mode: 'json',  // xml and html
    units: 'metric' // standard, metric and imperial
}  
// icons  
let imgUrl = 'http://openweathermap.org/img/wn/' // 10d@2x.png
let iconsHtml = ''

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
        .then(response => {
            
            // status

            return response.json()

        })
        .then(data => {
            console.log(data.name)

            temp.innerText = data.main.temp
            city.innerText = data.name
            description.innerText = parseWeatherData(data.weather)
            icon.innerHTML = iconsHtml
        }) 

}

function parseWeatherData(data){
    let description = ''
    iconsHtml = ''
    if (data.length >= 1)
    {
        data.forEach(item => {
            description += item.main + ' ' + item.description
            iconsHtml += generateIcon(item.icon)
        })
    }
    return description
}

btnSwitch.addEventListener('change', event => {
    console.log(btnSwitch.checked)
    if (btnSwitch.checked == true)
    {
        settings.units = 'metric'
        unitLabel.innerText = 'metric'
    } else {
        settings.units = 'imperial'
        unitLabel.innerText = 'imperial'
    }
    getData()
})

function generateIcon(iconCode){
    let img = document.createElement('img')
    img.src = imgUrl + iconCode + '@2x.png'

    return img.outerHTML
}
 
//settings.q = 'New York'
settings.units = 'metric'
console.log(generateUrl())

getData()