function helloPersons(nameList)
{
    nameList.forEach(function(name)
    {
        console.log("Hi, " + name + "!");
    })
}

helloPersons(["Lachlan", "Kim", "Moira"]);