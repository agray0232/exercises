
function renderCircles(circles) {
    var htmlString = '';
    for (i = 0; i < circles.length; i++) {
        htmlString = htmlString + renderCircle(circles[i]);
    }

    return htmlString;
}

function renderCircle(circle) {
    var htmlString =
        `
        <div class="text-center mt-5"; style=
            "width:${circle.radius * 2}px;
            height:${circle.radius * 2}px;
            border-radius:${circle.radius}px;
            background-color:${circle.color};
            justify-content: center;">
        </div>
        `

    return htmlString
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}