// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var boxContainer = document.getElementById("boxContainer");

document.getElementById("myButton").addEventListener("click", function () {
    var newBox = document.createElement("DIV");
    newBox.classList.add("box");
    boxContainer.appendChild(newBox);
})