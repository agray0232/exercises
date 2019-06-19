document.addEventListener("DOMContentLoaded", function () {
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist !== null) {
        renderMovies(watchlist);
    }
})

function renderMovies(watchlist) {
    var results = document.getElementById("movies-container");
    var moviesHTML = watchlist.map(renderMovie);
    results.innerHTML = moviesHTML.join("");
}

function renderMovie(currentMovie) {
    var movieHTML = ``;

    movieHTML = `
        <div class="card col-3 movie">
            <img class="card-img-top" src=\"${currentMovie.Poster}\" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">Released: ${currentMovie.Year}</p>
                    <a href="#" class="btn btn-primary" onClick="saveToWatchlist(\'${currentMovie.imdbID}\')">Add</a>
            </div>
        </div>
        `

    return movieHTML;
}