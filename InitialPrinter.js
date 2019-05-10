function initialPrinter(fullName)
{
    var initials = "";

    fullName.forEach(function(name)
    {
        initials += name.charAt(0);
    })

    return initials;
}

var assert = require('assert');
assert.equal(initialPrinter(["Anthony", "Robert", "Gray"]), "ARG");
assert.equal(initialPrinter(["Adam", "Michael", "Szaruga"]), "AMS");