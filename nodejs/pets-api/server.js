var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var owners = [
    {
        id: 1,
        name: "Adam",
        pets: [
            {
                id: 1,
                name: "Vera",
                type: "Dog"
            },
            {
                id: 2,
                name: "Felix",
                type: "Cat"
            }
        ]
    },
    {
        id: 2,
        name: "Kamilah",
        pets: [
            {
                id: 1,
                name: "Doug",
                type: "Dog"
            }
        ]
    }
];


// GET /api/owners
app.get('/api/owners', (req, res, next) => {
    res.json(owners);
})

// GET /api/owners/:id
app.get('/api/owners/:id', (req, res, next) => {
    var resOwner = owners.find(owner => owner.id == req.params.id);

    if (resOwner) {
        res.json(resOwner);
    }
})

// POST /api/owners
app.post('/api/owners', (req, res, next) => {
    var newOwner = {};
    console.log(req.params);
    newOwner.name = req.params.name;
    newOwner.id = getNextOwnerId();

    var pets = [];
    var petCounter = 1;
    req.params.pets.forEach(pet => {
        pets.push(
            {
                id: petCounter,
                name: pet.name,
                type: pet.type
            })
        petCounter++;
    })
    newOwner.pets = pets;

    owners.push(newOwner);

    res.json(newOwner);
})

// PUT /api/owners/:id

// DELETE /api/owners/:id

// GET /api/owners/:id/pets

// GET /api/owners/:id/pets/:petId

// POST /api/owners/:id/pets

// PUT /api/owners/:id/pets/:petId

// DELETE /api/owners/:id/pets/:petId


app.listen(3000, function () {
    console.log('Pets API is now listening on port 3000...');
})

function getNextOwnerId() {
    var highestId = 0;

    owners.forEach(owner => {
        if (owner.id > highestId) {
            highestId = owner.id;
        }
    })

    return highestId++;
}