let searchInput;
let querier = new MovieQuerier();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-form").addEventListener("submit", function (e) {
        e.preventDefault();
        var searchInput = document.getElementById("search-bar").value.toLowerCase();
        var moviesPromise = querier.queryMoviesByTitle(searchInput);
        moviesPromise.then(renderMovies);
    });
});

function renderMovies(movies) {
    console.log("Rendering");
    var results = document.getElementById("movies-container");
    var moviesHTML = movies.map(renderMovie);
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
                    <a class="btn btn-primary" onClick="saveToWatchlist(\'${currentMovie.imdbID}\')">Add</a>
            </div>
        </div>
        `

    return movieHTML;
}

function movieSearched(movie) {
    var searched = false;
    if (movie.Title.toLowerCase().includes(searchInput) ||
        movie.Year.toLowerCase().includes(searchInput) ||
        movie.imdbID.toLowerCase().includes(searchInput)
    ) {
        searched = true;
    }
    return searched;
}

function saveToWatchlist(imdbID) {
    debugger;
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    if (watchlist === null) {
        watchlist = [];
    }

    if (!watchlistContains(watchlist, imdbID)) {
        var movie = movieData.find(function (currentMovie) {
            return currentMovie.imdbID === imdbID;
        })

        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    }
}

function watchlistContains(watchlist, imdbID) {
    var contains = false;

    watchlist.forEach(function (watchlistMovie) {
        if (watchlistMovie.imdbID === imdbID) {
            contains = true;
        }
    })

    return contains;
}