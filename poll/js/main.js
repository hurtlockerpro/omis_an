
class Questions {

    constructor(){
        this.dbQuestions = [
            {
                title: 'Question 1?',
                anwsers: ['anser1', 'answer2'],
                answersStat: {
                    yes: 0,
                    no: 0
                }
            },
            {
                title: 'Question 2?',
                anwsers: ['anser1', 'answer2'],
                answersStat: {
                    yes: 0,
                    no: 0
                }
            },
            {
                title: 'Question 3?',
                anwsers: ['anser1', 'answer2'],
                answersStat: {
                    yes: 0,
                    no: 0
                }
            }

        ]
        this.currentIndex = 0
    }

    addQuestion(newQuestion = {})
    {
        if (newQuestion.hasOwnProperty('answersStat') == false)
        {
            newQuestion.answersStat = {
                yes: 0,
                no: 0
            }
        }
        this.dbQuestions.push(newQuestion)
    }

    // {
    //    li: { index: 0, class: 'name', id: 'name'},  
    //    ul: { class: 'name', id: 'name'}  
    // }
    showQuestionsList(options = {}){
        let ul = document.createElement('ul')
        if (typeof options != 'undefined' && options.hasOwnProperty('ul'))
        {
            if (options.ul.hasOwnProperty('class')) ul.classList.add(options.ul.class)
        }
        
        this.dbQuestions.forEach((question, index) => {
            let li = document.createElement('li')
            li.innerHTML = question.title
            //if (typeof options != 'undefined' && options.hasOwnProperty('li') && 
            if (index == this.currQuestionIndex())
            {
                //if (options.li.hasOwnProperty('class')) 
                li.classList.add('active')
            }
            ul.appendChild(li)
        })

        return ul
    }

    currQuestionIndex(){
        return this.currentIndex
    }

    nextQuestionIndex(){
        if (this.currentIndex >= this.dbQuestions.length - 1) {
            this.currentIndex = this.dbQuestions.length - 1
        } else {
            this.currentIndex += 1 
        }
        return this.currentIndex
    }

    prevQuestionIndex(){
        if (this.currentIndex <= 0) {
            this.currentIndex = 0
        } else {
            this.currentIndex -= 1
        }
        return this.currentIndex
    }

    showQuestionDetails(){
        let qTitle = document.createElement('div')
        qTitle.innerText = this.dbQuestions[this.currQuestionIndex()].title

        let btnYes = document.createElement('button')
        btnYes.type = 'button'
        btnYes.innerText = 'Yes'
        btnYes.classList.add('btn', 'btn-success')
        btnYes.addEventListener('click', event => {
            console.log('btnYes')
            this.saveAnwser('yes')
        })

        let btnNo = document.createElement('button')
        btnNo.type = 'button'
        btnNo.innerText = 'No'
        btnNo.classList.add('btn', 'btn-danger')
        btnNo.addEventListener('click', event => {
            console.log('btnNo')
            this.saveAnwser('no')
        })

        let questionDetailHTML = document.getElementById('quetionDetails')
        questionDetailHTML.innerHTML = ''
        questionDetailHTML.appendChild(qTitle)
        questionDetailHTML.appendChild(btnYes)
        questionDetailHTML.appendChild(btnNo)
    }

    // 'yes', 'no'
    saveAnwser(answer){

        switch (answer) {
            case 'yes':
                this.dbQuestions[this.currQuestionIndex()].answersStat.yes += 1
                break;
            case 'no':
                this.dbQuestions[this.currQuestionIndex()].answersStat.no += 1
                break;
        }
        this.drawChart()
        console.debug(this.dbQuestions)
    }

    drawChart()
    {

        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawStuff);
    
        // map data to chart 
        let statData = [['questions', 'yes', 'no']];
        newPoll.dbQuestions.forEach(question => {
            statData.push(
                [
                    question.title,
                    question.answersStat.yes,
                    question.answersStat.no
                ]
            )
        })
    
        function drawStuff() {
            var data = new google.visualization.arrayToDataTable(statData);
            var options = {
                width: 800,
                chart: {
                  title: 'Poll answers'
                },
                bars: 'vertical', // Required for Material Bar Charts.
            };
    
            var chart = new google.charts.Bar(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    }

}


let newPoll = new Questions()
newPoll.addQuestion({title: 'new question ?'})

let listOptions = {
    li: { index: 1, class: 'active'},  
    ul: { class: 'name'}  
}
document.getElementById('questions').innerHTML = newPoll.showQuestionsList(listOptions).outerHTML

document.getElementById('btnPrevious')
    .addEventListener('click', event => {
        console.debug('previous: ', newPoll.prevQuestionIndex())
        document.getElementById('questions').innerHTML = newPoll.showQuestionsList().outerHTML
        newPoll.showQuestionDetails()
    })

document.getElementById('btnNext')
    .addEventListener('click', event => {
        console.debug('next:', newPoll.nextQuestionIndex())
        document.getElementById('questions').innerHTML = newPoll.showQuestionsList().outerHTML
        newPoll.showQuestionDetails()
    })


    newPoll.showQuestionDetails()


   
