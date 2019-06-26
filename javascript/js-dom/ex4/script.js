// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
var boxes = document.getElementsByClassName("box");

button.addEventListener("click", function () {
    changeBoxColors();
})

function changeBoxColors() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "blue";
    }
}