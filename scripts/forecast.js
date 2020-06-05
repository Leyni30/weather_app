const key = 'XqtPfmEYqiSie24HNwyAcuGGXHP49pEA';

//Get weather information
const getWeather = async (locationKey) => {
    const weatherBase = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${key}`;
    const weather = await fetch(weatherBase + query);
    const weatherData = await weather.json();
    console.log(weatherData);
    return weatherData[0];
}

// Get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    //console.log(data);
    return data[0];
}

// getCity('San Francisco').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

/*The second .then() method is there
 because the first one returns a promise
  which we resolve in the second 
  then are able to use the data.*/