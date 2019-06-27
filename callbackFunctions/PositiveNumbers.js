function positiveNumber(numbers)
{
    return numbers.filter(function(number)
    {
        return number > 0;
    });
}
console.log(positiveNumber([1,-1,2,0]));
var assert = require('assert');
//assert.equal(positiveNumber([1,-1,2,0]), [1,2]);