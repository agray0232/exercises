function cipher(string, offset)
{
    var newString = "";

    for(charIndex = 0; charIndex < string.length; charIndex++)
    {
        newString = newString + offsetChar(string.charAt(charIndex))
    }

    return newString;
}

function offsetChar(string)
{
    var newChar = "";

    console.log(string.charCodeAt(0));

    return newChar;
}

cipher("Genius without education is like silver in the mine");