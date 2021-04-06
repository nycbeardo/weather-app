import React, {useState} from 'react' ;

/* adding OpenWeather API to file */

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});  //declared responseObj on this line


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
   
   // add weather data fetch function here above this
   
    }

    return (

        <div>
        <h2>Find current weather conditions for the city:</h2>
        <div>
        {JSON.stringify(responseObj)}
         </div>
        <button onClick={getForecast}>Get Forecast</button>
        </div>

        // JSX code goes there above this 

    )
}

export default Forecast;