function printNumbers(startNum, endNum)
{
    for(var printNum = startNum; printNum <= endNum; printNum++)
    {
        console.log(printNum);
    }
}
printNumbers(1, 10);

function printSquare(num)
{
    var array = new Array();
    
    for(var i = 0; i < num; i++)
    {
        array.push(createFullString(num));
    }
    printArray(array);
}
printSquare(5);

function createFullString(num)
{
    var string = "";

    for(var i = 0; i < num; i++)
    {
        string = string + "*";
    }

    return string;
}

function createEmptyString(num)
{
    var string = "";

    for(var i = 0; i < num; i++)
    {
        if(i == 0 || i == (num - 1))
        {
            string = string + "*";
        }
        else
        {
            string = string + " ";
        }
    }

    return string;
}

function createStringWithMessage(message)
{
    return "* " + message + " *";
}

function printBox(width, height)
{
    var array = createEmptyBox(width, height);
    printArray(array);
}
printBox(6, 4);

function createEmptyBox(width, height)
{
    var array = new Array();

    for(var i = 0; i < height; i++)
    {
        if(i == 0 || i == height - 1)
        {
            array.push(createFullString(width));
        }
        else
        {
            array.push(createEmptyString(width));
        }
    }

    return array;
}

function printBanner(message)
{
    var bannerLength = message.length + 4;
    var emptyBox = createEmptyBox(bannerLength, 3);
    
    emptyBox[1]
    printArray(emptyBox);

}
printBanner("Welcome to DigitalCrafts");

function printArray(array)
{
    if(typeof array != "undefined")
    {
        array.forEach(function(entry)
        {
            console.log(entry);
        })
    }
    else
    {
        console.log("WARNING: Undefined array received");
    }
}