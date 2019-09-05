var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();
// This body parser is needed to access the body of a request cleanly
// Like on line 42
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, function () {
    console.log('Express hello-world server running...');
})