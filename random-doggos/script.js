var doggoTypes = document.getElementById('doggo-types');
var doggo = document.getElementsByClassName("doggo");
var doggoButton = document.getElementsByClassName("js-dog-button");
var doggoTypeList = document.getElementById("doggo-types");
var breedToGet = "";

var breeds = $.get("https://dog.ceo/api/breeds/list").then(renderDoggoTypes);

$(doggoButton).click(function () {
    var url = getImageURL();
    $(this).text("Generating Doggo...");
    $.get(url, setNewDoggo).then(resetButton);
});

function getImageURL() {
    var url = ""

    // If there is a specific breed being requested
    if (breedToGet !== "") {
        url = `https://dog.ceo/api/breed/${breedToGet}/images/random`
    }
    else {
        url = `https://dog.ceo/api/breeds/image/random`
    }

    return url;
}

function setBreed(breed) {
    breedToGet = breed.value;
}

function setNewDoggo(data) {
    $(doggo).attr("src", data.message);
}

function resetButton() {
    $(doggoButton).text("Generate Doggo");
}

function renderDoggoTypes(data) {
    typesHTML = "<option value=\"\">Select Breed</option>";

    var types = data.message;
    for (i = 0; i < types.length; i++) {
        typesHTML = typesHTML.concat("<option value=\"" + types[i] + "\">" + types[i] + "</option>")
    }

    doggoTypes.innerHTML = typesHTML;
}
