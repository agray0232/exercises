function biggestNumber(numberList)
{
    var biggestNumber = Number.MIN_VALUE;

    for(numIndex = 0; numIndex < numberList.length; numIndex++)
    {
        if (numberList[numIndex] > biggestNumber)
        {
            biggestNumber = numberList[numIndex];
        }
    }

    return biggestNumber;
}

var assert = require('assert');
assert.equal(biggestNumber([10, 2, 3]), 10);
assert.equal(biggestNumber([1.3, 3.2, -3, 20]), 20);