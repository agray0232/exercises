function squareNumbers(numbers)
{
    return numbers.map(function(number)
    {
        return number**2;
    });
}

console.log(squareNumbers([1,2,3]));