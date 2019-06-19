let searchInput;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-form").addEventListener("submit", function (e) {
        e.preventDefault();
        searchInput = document.getElementById("search-bar").value.toLowerCase();
        renderMovies(movieData, searchInput);
    });
});

function renderMovies(moviesArray, searchInput) {
    var results = document.getElementById("movies-container");
    var moviesHTML = moviesArray.map(renderMovie);
    results.innerHTML = moviesHTML.join("");
}

function renderMovie(currentMovie) {
    var movieHTML = ``;

    if (movieSearched(currentMovie)) {
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
    } else {
        movieHTML = ``;
    }

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
    debugger;
    var contains = false;

    watchlist.forEach(function (watchlistMovie) {
        if (watchlistMovie.imdbID === imdbID) {
            contains = true;
        }
    })

    return contains;
}