var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// This body parser is needed to access the body of a request cleanly
// Like on line 42
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get("/cats", (req, res) => {
    res.send("<h1>Meow</h1>");
})

app.get("/dogs", (req, res) => {
    res.send("<h1>Woof</h1>");
})

app.get("/cats_and_dogs", (req, res) => {
    res.send("<h1>Living together</h1>");
})

app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello, ${name}!</h1>`);
})

app.get("/year", (req, res) => {
    const age = req.query.age;
    const year = new Date().getFullYear();
    res.send(`<h1>You were born in ${year - age}!</h1>`);
})

app.listen(3000, function () {
    console.log('Express hello-world server running...');
})