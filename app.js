//FOR DATE & TIME
let dateInput = document.querySelector('#date')
let timeInput = document.querySelector('#time')
//FOR THE CALENDAR
const daysTag = document.querySelector(".days")
const currentDate = document.querySelector(".current-date")
const prevNextIcon = document.querySelectorAll(".icons span")
let date = new Date()
let currYear = date.getFullYear()
let currMonth = date.getMonth()

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//FOR CALENDAR
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay()
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate()
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay()
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate()
    let liTag = ""

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag
}
renderCalendar()

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate())
            currYear = date.getFullYear()
            currMonth = date.getMonth()
        } else {
            date = new Date()
        }
        renderCalendar()
    })
})

//FOR DATE & TIME
function displayDate(){
    dateInput.innerHTML = `Today's Date: ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    setInterval(displayTime, 10)
    function displayTime(){
        let date = new Date()
        timeInput.innerHTML =  `Time: ${date.toLocaleTimeString()}`
    }
}

window.addEventListener('load',displayDate)

//FOR QUOTE
const QUOTEENDPOINT = "https://api.quotable.io/random"
let quote = document.querySelector("#quote")
let author = document.querySelector("#author")
let quoteBtn = document.querySelector("#quote-btn")

async function getQuote(){
    const response = await fetch(QUOTEENDPOINT)
    const data = await response.json()

    quote.textContent = `"${data.content}"`
    author.textContent = `~${data.author}~`
}
quoteBtn.addEventListener('click', getQuote)
window.addEventListener('load',getQuote)


// FOR TODO
const todos = JSON.parse(localStorage.getItem('todos')) || []
const deletedTodos = JSON.parse(localStorage.getItem('deletedTodos')) || []
const addBtn = document.querySelector(".todo-form button")
const form = document.querySelector('.todo-form')


function syncTodosToDOM(){
    const todoList = document.querySelector(".todo-list")
    todoList.innerHTML = ''
    
    todos.forEach((todo,index) => {
        const todoItem = document.createElement("div")
        todoItem.classList.add("todo-list-item")
        
        todoItem.innerHTML = `
        <div>
        <p>${todo.title}</p>
        <div class="star-container${index}">
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        <a href="#" class="bi-star-fill"></a>
        </div>
        </div>
        <div class="button-container">
        <button type="submit" onclick="removeTodo(${index})" class="delete-btn">Delete</button>
        </div>
        `
        todoList.appendChild(todoItem)
        prioritizeTodo(index)
    });
    localStorage.setItem('todos', JSON.stringify(todos))
}



function addTodo(){
    const input = document.querySelector('.todo-form input')
    const value = input.value
    if(value == ""){
        alert("Please insert new task")
        return
    }
    const newTodo = {
        title: value
    }

    todos.push(newTodo)
    syncTodosToDOM()

    input.value = ''
}

function removeTodo(index){
    let x = todos.splice(index,1)
    deletedTodos.push(Object.values(x)[0])
    syncTodosToDOM()
    syncDeletedTodosToDOM()
}

function syncDeletedTodosToDOM(){

    const deletedTodoList = document.querySelector(".deleted-todo")
    deletedTodoList.innerHTML = ''
    
    deletedTodos.forEach((todo,index) => {
        const deletedTodoItem = document.createElement("div")
        deletedTodoItem.classList.add("deleted-todo-item")
        
        deletedTodoItem.innerHTML = `
        <p>${todo.title}</p>
        <div>
            <button type="submit" onclick="recoverTodo(${index})">Recover</button>
            <button type="submit" onclick="removeDeletedTodo(${index})">Delete</button>
        </div>
        `
        deletedTodoList.appendChild(deletedTodoItem)
    });
    localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos))
}


function removeDeletedTodo(index){
    deletedTodos.splice(index,1)
    syncTodosToDOM()
    syncDeletedTodosToDOM()
}


function recoverTodo(index){
    let x = deletedTodos.splice(index,1)
    todos.push(Object.values(x)[0])
    console.log(todos)
    syncTodosToDOM()
    syncDeletedTodosToDOM()
}

function prioritizeTodo(index){
    let stars = document.querySelectorAll(`.star-container${index} a`)
    stars.forEach((item,index1) =>{
        item.addEventListener('click', () =>{
            stars.forEach((star,index2) => {
                index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')
            })
        })
    })
}

form.addEventListener('submit', (e) => e.preventDefault())
syncTodosToDOM()
syncDeletedTodosToDOM()