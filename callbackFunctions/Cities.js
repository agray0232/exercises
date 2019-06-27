var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

/**
 * Takes in an array of cities and returns a new array of cities that 
 * are cooler than 70 degrees
 * 
 * @param {*} cities - An array of cities
 */
function coolerCities(cities)
{
    var coolerCities = [];

    coolerCities = cities.filter(function(city)
    {
        return city.temperature < 70;
    })

    return coolerCities;
}
console.log(coolerCities(cities));

/**
 * Takes in an array of cities and returns an array of the city names
 * 
 * @param {*} cities 
 */
function cityNames(cities)
{
    var cityNames = [];

    cityNames = cities.map(function(city)
    {
        return city.name;
    });

    return cityNames;
}

console.log(cityNames(cities));