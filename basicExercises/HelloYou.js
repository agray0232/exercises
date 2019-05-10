function hello(name)
{
    if(typeof name == "undefined")
    {
        name = "world";
    }
    var message = "Hello, " + name + "!";
    console.log(message);
}
hello("Anthony");
hello();