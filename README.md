# final-part3

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body>
    <!-- Left sec -->
    <section id="main-todo-container">
        <div class="todo-container">
            <h1>To-Do List</h1>
            <form class="todo-form" action="">
                <input type="text" placeholder="Enter a new task...">
                <button onclick="addTodo()" type="submit">Add Task</button>
            </form>
            <div class="todo-list"></div>
        </div>
    
        <div class="deleted-container">
            <h1>Completed Todo</h1>
            <div class="deleted-todo"></div>
        </div>
    </section>

    <!-- right sec -->
    <section id="right-sec">
        <div class="date-time">
            <h2 id="date"></h2>
            <h2 id="time"></h2>
         </div>
        
        <div class="wrapper-quote">
            <p id="quote"></p>
            <p id="author"></p>
            <button id="quote-btn" type="button">New Quote</button>
        </div>

        <div class="calendar-sec">
            <div class="wrapper-calendar">
                <header>
                    <p class="current-date"></p>
                    <div class="icons">
                        <span id="prev" class="material-symbols-rounded">chevron_left</span>
                        <span id="next" class="material-symbols-rounded">chevron_right</span>
                    </div>
                </header>
                <div class="calendar">
                    <ul class="weeks">
                        <li>Sun</li>
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                    </ul>
                    <ul class="days">
                    </ul>
                </div>
            </div>
        </div>

    </section>



    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*{
    margin: 0;
    font-family: 'Poppins', 'sans-serif';
    box-sizing: border-box;
}

body{
    height: 100vh;
    display: flex;
}

#right-sec{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 450px;
    height: auto;
}

#date{
    margin-top: 50px;
}

.wrapper-quote{
    padding: 20px 10px;
    margin-right: 20px;
}

.calendar-sec{
    display: flex;
    border-radius: 20px;
    box-shadow: 0 0 10px 2px rgb(207, 204, 204);
    margin-bottom: 20px;
    margin-right: 20px;
}

.wrapper-calendar{
    width: 450px;
    background: #fff;
    border-radius: 10px;
}

.wrapper-calendar header{
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}

header .current-date{
    font-size: 1.45rem;
    font-weight: 500;
}

header .icons span{
    height: 38px;
    width: 38px;
    color: #878787;
    font-size: 1.9rem;
    margin: 0 1px;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
    cursor: pointer;
}

header .icons span:hover{
    background: #f2f2f2;
}

header .icons span:last-child{
    margin-right: -10px;
}

.calendar{
    padding: 20px;
}

.calendar ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 0;
}
.calendar .days{
    margin-bottom: 20px;
}

.calendar .weeks li{
    font-weight: 500;
}

.calendar ul li{
    position: relative;
    width: calc(100% / 7);
}

.calendar .days li{
    z-index: 1;
    cursor: pointer;
    margin-top: 30px;
}

.days li.inactive{
    color: #aaa;
}

.days li.active{
    color: #fff;
}

.calendar .days li::before{
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    top: 50%;
    left: 50%;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%,-50%);
}

.days li:hover::before{
    background: #f2f2f2;

}

.days li.active::before{
    background: rgb(35, 231, 245);
}

/* Quote Section */
#quote{
    font-style: italic;
}

#quote-btn{
    background-color: #fff;
    color: green;
    border: none;
    padding: 8px 10px;
    border-radius: 10px;
}

#quote-btn:hover{
    background-color: green;
    color: #fff;
}

/* Left Section */

/* TODO SECTION */
#main-todo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex: 1;
}

.todo-container{
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 2px rgb(214, 213, 213);
    width: 75%;
    height: 50%;
    padding: 10px 10px 20px 10px;
    margin-top: 30px;
}

.todo-form{
    width: 100%;
    display: flex;
    justify-content: center;
}

.todo-form input{
    flex: 1;
    max-width: 500px;
    margin: 10px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid gray;
}

.todo-form button{
    padding: 0 8px;
    margin: 10px 10px 10px 0;
    background-color: rgb(38, 199, 38);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    border: 1px solid rgb(38, 199, 38);
}

.todo-form button:hover{
    background-color: white;
    color: rgb(0, 0, 0);
}

.todo-list{
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;
    overflow-y: scroll;
}

.todo-list-item{
    width: 180px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 0;
}

.todo-list-item p{
    margin: 5px 0;
}

.todo-list-item button{
    padding: 8px 8px;
    background-color: rgb(214, 41, 41);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    border: 1px solid rgb(214, 41, 41);
}

.todo-list-item button:hover{
    background-color: white;
    color: rgb(0, 0, 0);
}

.bi-star-fill{
    color: rgb(0, 0, 0);
}

.active{
    color: gold;
}

.button-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.deleted-container{
    margin-top: 20px;
    margin-bottom: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 2px rgb(214, 213, 213);
    width: 75%;
    height: 50%;
    padding: 10px 10px 20px 10px;
}

.deleted-todo{
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: auto auto;
    overflow-y: scroll;
}

.deleted-todo-item{
    width: 180px;
    display: flex;
    flex-direction: column;
}

.deleted-todo p{
    text-decoration: line-through;
    margin: 10px 0;
}

.deleted-todo button{
    background-color: rgb(75, 232, 238);
    color: #fff;
    border: none;
    padding: 8px 8px;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid rgb(75, 232, 238);

}

.deleted-todo button:hover{
    background-color: white;
    color: rgb(0, 0, 0);
}


/* for tablet user */
@media (max-width: 1170px){
    body{
        display: flex;
        flex-direction: column;
        height: unset;
        width: unset;
    }
    
    #main-todo-container{
        order: 2;
    }
    
    .calendar-sec{
        display: none;
    }
    
    #right-sec{
        order: 1;
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: unset;
        justify-content: unset; 
    }
    
    #date, #time{
        margin: 0;
        padding: 10px 20px;
        width: auto; 
    }
    
    .wrapper-quote{
        margin: 0;
        padding: 10px 20px;
        align-self: center;
        flex: 1; 
    }
    
} 


/* for mobile */
@media (max-width: 420px) {
    body{
        display: flex;
        flex-direction: column;
        height: unset;
        width: unset;
    }

    #main-todo-container{
        order: 2;
    }

    #right-sec{
        order: 1;
        display: flex;
        flex-direction: column;
    }

    #date, #time{
        margin: 0;
        padding: 10px 20px;
    }

    .wrapper-quote{
        margin: 0;
        padding: 10px 20px;
    }

    .calendar-sec{
        display: none;
    }

    .todo-container{
        width: 85%;
        height: 500px;
    }

    .todo-list{
        display: flex;
        flex-direction: column;
        padding-left: 50px;
    }

    .deleted-container{
        width: 85%;
        height: 500px;
    }

    .deleted-todo{
        display: flex;
        flex-direction: column;
        padding-left: 50px;
    }
}
    
    <script src="app.js"></script>
</body>
</html>
