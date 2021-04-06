import React from 'react' ;

/* adding OpenWeather API to file */

const Forecast = () => {

    function getForecast() {

        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=New%20York", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f7e3448277msha25ddce647d5337p103cf8jsn14d27353503a",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
   
   // add weather data fetch function here
   
    }

    return (
        // JSX code goes here

    )
}

export default Forecast;