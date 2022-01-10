
// 4a5de1e54b304bf2909af12bf979c242
// https://newsapi.org/v2/everything?
// q=tesla
// &from=2021-12-10
// &sortBy=publishedAt
// &apiKey=4a5de1e54b304bf2909af12bf979c242


class Url {

    settings = {
        url: 'https://newsapi.org/v2/everything',
        q: 'tesla', //
        apiKey: '4a5de1e54b304bf2909af12bf979c242', // {API key}
        sortBy: 'publishedAt',
        from: '2021-12-10'
    } 

    constructor(){
        let date = new Date()

        this.settings.from = date.getFullYear() + '-' +  (date.getMonth() + 1)
        + '-' + date.getDate()
        console.log(this.settings.from)
    }

    generateUrl = () => {
        let url = this.settings.url
    
        let filterSettings = []
        Object.entries(this.settings).forEach(item => {
            if (item[0] == 'url')
            {
                url = item[1]
            } else {
                filterSettings.push(item[0] + "=" + item[1]) 
            }
        })
        return url + '?' + filterSettings.join('&')
    }
}

class News extends Url {

    #allNewsParsed


    constructor(newSettings = undefined){
        super()
        // TODO
        if (newSettings != undefined) this.settings = newSettings

        this.newsKeyword = document.getElementById('newsKeyword')
        this.newsCategory = document.getElementById('newsCategory')
        this.btnNewsSearch = document.getElementById('btnNewsSearch')
        this.btnNewsSearch.addEventListener('click', event => {
            this.doSearch()
        })
    }
    /*
    color = ''
    #color2 = '' // private

    constructor(newColor){
        this.color = newColor
        this.#color2 = ''
        console.log(this)
        this.getColor()
    }

    getColor(){
        console.log('color: ', this.color)
    }

    summa(x, y){
        return x + y
    }*/


    async getData(){
        let url = this.generateUrl()
        let request = await fetch(url)
        this.#allNewsParsed = await request.json();
        console.log(this.#allNewsParsed)
        if (this.#allNewsParsed.hasOwnProperty('status') && this.#allNewsParsed.status == 'ok') 
        {
            await this.fillSlides()
        }
    }

    fillSlides(){
        let slides = document.getElementsByClassName('carousel-item')

        Array.from(slides).forEach((slide, index) => {
            slide.querySelector('img').src = this.#allNewsParsed.articles[index].urlToImage
            slide.querySelector('h5').innerText = this.#allNewsParsed.articles[index].title
            slide.querySelector('p').innerText = this.#allNewsParsed.articles[index]
                .description.substring(0, 30) + '...'
        })
    }

    doSearch(){

        console.log(
            'select: ', this.newsCategory.value, 
            ' text: ', this.newsKeyword.value
        )
        if (this.newsKeyword.value.trim().length > 3)
        {
            this.settings.q = this.newsKeyword.value
            if (this.newsCategory.value != -1) this.settings.category = this.newsCategory.value

            this.getData()

            if (this.#allNewsParsed.status == 'error')
            {
            
                let modalObj = document.getElementById('exampleModal')
                modalObj.querySelector('#exampleModalLabel').innerText = this.#allNewsParsed.status
                modalObj.querySelector('.modal-body').innerHTML = this.#allNewsParsed.message

                var myModal = new bootstrap.Modal(modalObj)
                myModal.show()
            }

            console.log(this.generateUrl())
        }
    }



}

let myNews = new News()
myNews.getData()


/*
let n = new News('red') // new object -> polymorfizm
n.getColor()
let n2 = new News('blue') // new object -> polymorfizm
n2.getColor()
n2.color = 'yellow'
n2.getColor()

console.log('obj1 result: ', n.summa(5, 5))
console.log('obj2 result: ',  n2.summa(15, 5))
*/