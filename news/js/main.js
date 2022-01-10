
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
}

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