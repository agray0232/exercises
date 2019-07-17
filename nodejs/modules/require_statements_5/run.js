var random = require("./randomValue.js");
var dog = require("./dog.js");
var cat = require("./cat.js");

var dogVal = 0;
var catVal = 1;

if (random(dogVal, catVal) == dogVal) {
    console.log(dog);
} else {
    console.log(cat);
}