function evenNumbers(numbers)
{
    return numbers.filter(function(number)
    {
        return(number%2 == 0);
    });
}

console.log(evenNumbers([1,2,4,3,0]));