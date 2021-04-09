import React, {useState} from 'react' ;
import Conditions from '../Conditions/Conditions';

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
        .then(response => response.json())
        .then(response => {setResponseObj(response) ;
        
        

       

        });

       
   
   // add weather data for fetch function here above this line

   
   
    }



    return (

        <div>
           <h2>Find Current Weather Conditions</h2>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions
               responseObj={responseObj}
               />
       </div> 

        // JSX code goes there above this line 

    )
}

export default Forecast;