const apiKey = 'getyourownkey'; // Replace 'YOUR_API_KEY' with your actual API key

function getWeatherInfo() {
    const longitude = document.getElementById('longitude').value;
    const latitude = document.getElementById('latitude').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    console.log(apiUrl);
    fetch(apiUrl)
        .then(response => response.text())
        .then(json => JSON.parse(json))
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Longitude: ${data.coord.lon}</p>
                                     <p>Latitude: ${data.coord.lat}</p>
                                     <p>Weather: ${data.weather.description}</p>
                                     <p>Wind Speed: ${data.wind.speed}</p>
                                     <p>Wind Gust: ${data.wind.gust}</p>
                                     <p>Sunrise: ${data.sys.sunrise}</p>
                                     <p>Sunset: ${data.sys.sunset}</p>
                                     <p>Time Zone: ${data.timezone}</p>`;
        })
}


