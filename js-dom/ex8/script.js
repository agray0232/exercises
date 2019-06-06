/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears 
    inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's 
    click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var button = document.getElementById("add-button");
var input = document.getElementById("description");
var taskList = document.getElementById('todo-list');

button.addEventListener("click", function () {
    //debugger;
    var newTask = input.value;
    addTask(newTask);
})

function addTask(newTask) {

    if (newTask !== "") {
        var newTaskElement = document.createElement("li");
        newTaskElement.innerHTML = newTask;
        taskList.appendChild(newTaskElement);
    }
}