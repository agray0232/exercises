/*
 * Define some useful variables and handles
 */
var doggoTypes = document.getElementById('doggo-types');
var doggo = document.getElementsByClassName("doggo");
var doggoButton = document.getElementsByClassName("js-dog-button");
var doggoTypeList = document.getElementById("doggo-types");
var breedToGet = "";

/*
 * Go to the dog.ceo API and get all of their dog breeds, then render all
 * of the choices into the breed selector options
 */
var breeds = $.get("https://dog.ceo/api/breeds/list").then(renderDoggoTypes);

/*
 * Add onClick function to the doggo button. This changes the text of the button,
 * retrieves and sets the new doggo, and resets the button
 */
$(doggoButton).click(function () {
    var url = getImageURL();
    $(this).text("Generating Doggo...");
    $.get(url, setNewDoggo).then(resetButton);
});

/*
 * Sets the image URL based on whether or not there is a specific breed to request for
 *
 * @return url - The URL to request a dog image from
 */
function getImageURL() {
    var url = ""

    // If there is a specific breed being requested
    if (breedToGet !== "") {
        url = `https://dog.ceo/api/breed/${breedToGet}/images/random`
    }
    // Else just request a random breed
    else {
        url = `https://dog.ceo/api/breeds/image/random`
    }

    return url;
}

/*
 * Sets the breed to get
 */
function setBreed(breed) {
    breedToGet = breed.value;
}

/*
 * Sets the source of the dog image tag
 */
function setNewDoggo(data) {
    $(doggo).attr("src", data.message);
}

/*
 * Resets the doggo button text
 */
function resetButton() {
    $(doggoButton).text("Generate Doggo");
}

/*
 * Render the HTML for the dog breed options and set the inner HTML
 */
function renderDoggoTypes(data) {
    typesHTML = "<option value=\"\">Select Breed</option>";

    var types = data.message;
    for (i = 0; i < types.length; i++) {
        typesHTML = typesHTML.concat("<option value=\"" + types[i] + "\">" + types[i] + "</option>")
    }

    doggoTypes.innerHTML = typesHTML;
}
