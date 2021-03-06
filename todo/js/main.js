
class ToDo {

    todos = [
        {
            title: 'title 1',
            date: '12.01.2022',
            reminder: true
        }
    ]

    /*
    function x(...args){
        console.log(args.length)
        args.forEach()
    }
    x(1,2,3,4,5,67)
    */

    constructor(){
        // form elements
        this.frmTodo = document.getElementById('frmTodo')
        this.frmCalendar = document.getElementById('frmCalendar')
        this.frmReminder = document.getElementById('frmReminder')
        this.btnSave = document.getElementById('btnSave')
        this.btnSave.addEventListener('click', event => {
            this.saveTodo()
        })
    }

    showTodoItems(){
        let todoItems = document.getElementById('todoItems')
        todoItems.innerHTML = ''

        for (let index = 0; index < this.todos.length; index++) {
            todoItems.appendChild(
                this.generateTodoItem(this.todos[index], index)
            )
        }
    }

    generateTodoItem(todoObject, rowIndex){
        let item = document.createElement('div')
        item.classList.add('todoItem')
        // if (typeof todoObject.reminder == 'undefined') 
        if (todoObject.hasOwnProperty('reminder') == false)
        {
            // throw new Error('Required bla bla bla');
            throw 'Required bla bla bla';
        }
        if (todoObject.reminder == true) item.classList.add('reminder')

        let title = document.createElement('div')
        title.classList.add('title')
        title.innerText = todoObject.title

        let button = document.createElement('button')
        button.classList.add('btn', 'btn-danger')
        button.type = 'button'
        button.innerText = 'x'
        button.setAttribute('data-row', rowIndex)
        button.addEventListener('click', event => {
            console.log('clicked: ', event.target.dataset.row)
            this.deleteTodo(event)
        })


        item.appendChild(title)
        item.appendChild(button)

        return item
    }
    saveTodo(){

        let todoItem = new Object()
        todoItem.title = this.frmTodo.value
        todoItem.date = this.frmCalendar.value
        //todoItem.reminder = this.frmReminder.checked
        
        this.todos.push(todoItem)

        this.showTodoItems()
    }

    deleteTodo(event){
        console.log(event)
        // event.target.parentNode.style.display = 'none'
        this.todos = this.todos.filter((value, index, arr) => {
            //console.log('results: ', value, index, ' row:', event.target.dataset.row)
            return index != event.target.dataset.row
        })

        console.log(this.todos)

        this.showTodoItems()
    }
}

let clsTodos = new ToDo()
clsTodos.showTodoItems()

function checkTryCatch(y){

    let x = 10
    let arr = [100]
    try {
        nonExistentFunction();
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      } finally {
          // always 
          x = 0
      }
    try {
        // logic where error can occure
        let result = x / arr[1]
        console.log( arr[1] )

    } catch (err) {
        throw 'Divided to zero'
    }
}

checkTryCatch(0)

