var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// This body parser is needed to access the body of a request cleanly
// Like on line 42
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    },
    {
        id: 2,
        todo: "Second thing to do"
    }
];

// GET /api/todos
app.get('/api/todos', function (req, res, next) {
    res.json(todoList);
})

// GET /api/todos/:id
app.get('/api/todos/:id', function (req, res, next) {
    var response = todoList.find(todo => todo.id == req.params.id);

    if (response) {
        res.json(response);
    }
    else {
        res.status(404).json({
            error: `Todo with id of ${req.params.id} not found`
        });
    }
})

// POST /api/todos
app.post('/api/todos', (req, res, next) => {

    var nextId = todoList.reduce(function (prev, curr) {
        return prev.id > curr.id ? prev.id : curr.id;
    }, 0) + 1;
    var todo = {
        id: nextId,
        todo: req.body.todo
    }
    res.json(todo);
    todoList.push(todo);
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res, next) => {
    var updatedTodo = todoList.find(todo => todo.id == parseInt(req.params.id));
    if (updatedTodo) {
        updatedTodo.todo = req.bodo.todo;
        res.json(todoList);
    }
    else {
        res.status(404).json({
            error: `todo of id ${req.params.id} not found`
        })
    }
})

// DELETE /api/todos/:id

app.listen(3000, function () {
    console.log('Todo List API is now listening on port 3000...');
})