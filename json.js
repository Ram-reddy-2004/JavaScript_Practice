const weatherdata = `{
    "coord": { "lon": 79.55, "lat": 13.45 },
    "weather": [
        { "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }
    ],
    "base": "stations",
    "main": {
        "temp": 29.5,
        "feels_like": 31.2,
        "pressure": 1012,
        "humidity": 55
    },
    "visibility": 10000,
    "wind": { "speed": 3.6, "deg": 90 },
    "clouds": { "all": 0 },
    "dt": 1705747200,
    "sys": {
        "country": "IN",
        "sunrise": 1705708800,
        "sunset": 1705750800
    },
    "timezone": 19800,
    "id": 1259425,
    "name": "Puttur",
    "cod": 200
}`;

const weather = JSON.parse(weatherdata);

console.log(weather.coord.lat);

const weatherString = JSON.stringify(weather);
console.log(weatherString);