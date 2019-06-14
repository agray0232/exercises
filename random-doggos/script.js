var doggo = document.getElementsByClassName("doggo");
var doggoButton = document.getElementsByClassName("js-dog-button");

$(doggoButton).click(function () {
    var url = "https://dog.ceo/api/breeds/image/random"
    $(this).text("Generating Doggo...");
    $.get(url, setNewDoggo).then(resetButton);
});

function setNewDoggo(data) {
    $(doggo).attr("src", data.message);
}

function resetButton() {
    $(doggoButton).text("Generate Doggo");
}
