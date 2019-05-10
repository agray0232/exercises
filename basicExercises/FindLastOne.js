function findLastOne(numbers)
{
    var lastOneIndex = 0;

    numbers.forEach(function(number, index, originalArray)
    {
        // We aren't going to use original array here, but just so you know
        // know you can do it

        if(number == 1)
        {
            lastOneIndex = index;
        }
    })

    return lastOneIndex;
}

var assert = require('assert');
assert.equal(findLastOne([1,0,1,1,1,0,0,1,0,0]), 7);
assert.equal(findLastOne([0,1,0,0,0,0,0,0,0]), 1);