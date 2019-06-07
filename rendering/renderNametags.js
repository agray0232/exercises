
function renderNametags(nametags) {
    var htmlString = '';
    for (i = 0; i < nametags.length; i++) {
        htmlString = htmlString + renderNametag(nametags[i]);
    }

    return htmlString;
}

function renderNametag(nametag) {
    var htmlString =
        `
        <div class="text-center mt-5 nametag center" style="padding-top:10px; padding-bottom:10px; margin:auto";>
            <div style="width:175px; height:40px; background-color:#0066ff; color:#d9d9d9; margin:auto">
                Hello, my name is:
            </div>
            <div style="width:175px; height:40px; background-color:#0066ff; color:#d9d9d9; margin:auto">
                ${nametag}
            </div>
        </div>
        `

    return htmlString
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
        "Kamilah",
        "Kim",
        "Stuart",
        "Ron",
        "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}