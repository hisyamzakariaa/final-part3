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

    
    
    <script src="app.js"></script>
</body>
</html>
