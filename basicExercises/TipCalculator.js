function tipAmount(bill, service)
{
    var tip = 0;
    var tipPercentage = 0;

    switch(service)
    {
        case "good":
        case "Good":
        case "GOOD":
            tipPercentage = 0.2;
            break;
        case "fair":
        case "Fair":
        case "FAIR":
            tipPercentage = 0.15;
            break;
        case "bad":
        case "Bad":
        case "BAD":
            tipPercentage = 0.1;
            break;
        default:
            tipPercentage = 0.15;
    }
    tip = bill * tipPercentage;
    
    return tip;
}
console.log(tipAmount(100, "GOOD"));
console.log(tipAmount(40, "fair"));

function totalAmount(bill, service)
{
    return bill + tipAmount(bill, service);
}
console.log(totalAmount(100, "Good"));
console.log(totalAmount(40, "Fair"));

function splitAmount(bill, service, numPeople)
{
    return totalAmount(bill, service) / numPeople;
}
console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));