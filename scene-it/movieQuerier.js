class MovieQuerier {

    queryMoviesByTitle(titleSearch) {
        var moviesPromise = new Promise(function (resolve, reject) {
            var sanitizedSearchInput = encodeURIComponent(titleSearch);
            $.get("http://www.omdbapi.com/?apikey=3430a78&s=" + sanitizedSearchInput)
                .then(function (movieData) {
                    console.log("Resolving");
                    resolve(movieData.Search);
                });
        });

        return moviesPromise;
    }

    queryMovieByImdbId(id) {
        var sanitizedSearchInput = encodeURIComponent(titleSearch);
        var movieData = $.get("http://www.omdbapi.com/?apikey=3430a78&s=" + sanitizedSearchInput)
            .then(renderMovies);
    }

    queryMovieByYear(year) {

    }

}