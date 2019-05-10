
var resultsArray = [{country: "usa", 
                     time: 223}, 
                    {country: "poland", 
                     time: 222},
                    {country: "usa", 
                     time: 100}];

function olympicResults(array)
{
    var results = {};
    
    for(var resultIndex = 0; resultIndex < array.length; resultIndex++)
    {
        // This current result has two keys "country" and "time"
        var currentResult = array[resultIndex];

        // Get the country name and time
        var country = Object.values(currentResult)[0];
        var time = Object.values(currentResult)[1];

        // If the results do not contain this country, add it
        if(!results[country])
        {
            results[country] = time;
        }
        // Else if it does contain the country but this is a better time, update the time
        else if(results[country] > time)
        {
            results[country] = time;
        }
    }

    var countries = Object.keys(results);
    var times = Object.values(results);

    for(var numResults = 0; numResults < countries.length; numResults++)
    {
        console.log(countries[numResults] + " : " + times[numResults]);
    }
}


function olympicResultsRecount(array)
{
    console.log("RECOUNT BELOW:");
    var results = {};
    
    for(var resultIndex = 0; resultIndex < array.length; resultIndex++)
    {
        // This current result has two keys "country" and "time"
        var currentResult = array[resultIndex];

        // If the results do not contain this country, add it
        var myCountry = currentResult.country;

        console.log("!results[currentResult.country] " + !results[currentResult.country]);
        console.log("!results.myCountry] " + !results.myCountry);

        if(!results[currentResult.country])
        {
            results[currentResult.country] = currentResult.time;
        }
        // Else if it does contain the country but this is a better time, update the time
        else if(results[currentResult.country] > currentResult.time)
        {
            results[currentResult.country] = currentResult.time;
        }
    }

    
    var countries = Object.keys(results);
    var times = Object.values(results);

    for(var numResults = 0; numResults < countries.length; numResults++)
    {
        console.log(countries[numResults]);
        var myCountry = countries[numResults];
        console.log("results[myCountry]: " + results[myCountry]);
        console.log("results.myCountry: " + results.myCountry);
        //console.log(results.countries[numResults]);
        console.log(countries[numResults] + " : " + times[numResults]);
    }
}

olympicResults(resultsArray);
olympicResultsRecount(resultsArray);





function anotherWayToCount(array) {
    var bestTimes = {};
  
    for (var i = 0; i < array.length; i++) {
      var currentTime = array[i];
      var currentCountrysBestTime = bestTimes[currentTime.country];
      var currentCountryTime = currentTime.time;
  
      if (!bestTimes[currentTime.country]) {
        bestTimes[currentTime.country] = currentTime.time;
      } else if (currentCountryTime < bestTimes[currentTime.country]) {
        bestTimes[currentTime.country] = currentTime.time;
      }
    }
  
    console.log(bestTimes);
  }

