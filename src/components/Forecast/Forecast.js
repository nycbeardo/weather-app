import React, {useState} from 'react' ;
import Conditions from '../Conditions/Conditions';

/* adding OpenWeather API to file */

const Forecast = () => {

    

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});  //declared responseObj on this line


const uriEncodedCity = encodeURIComponent(city);




    function getForecast(e) {

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "f7e3448277msha25ddce647d5337p103cf8jsn14d27353503a",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {setResponseObj(response) ;
        
        
             e.preventDefault();

       

        });
        
        
      
   
   // add weather data for fetch function here above this line

   
   
    }



    return (

        <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
           <input
               type="text"
               placeholder="Enter City"
               maxLength="50"
               value={city}
               onChange={(e) => setCity(e.target.value)}
               />
           <label>
               <input
                   type="radio"
                   name="units"
                   checked={unit === "imperial"}
                   value="imperial"
                   onChange={(e) => setUnit(e.target.value)}
                   />
               Fahrenheit
           </label>
           <label>
               <input
                   type="radio"
                   name="units"
                   checked={unit === "metric"}
                   value="metric"
                   onChange={(e) => setUnit(e.target.value)}
                   />
               Celcius
           </label>

           <button type="submit"> Get Forecast </button>

       </form>
           <Conditions
               responseObj={responseObj}
               />
       </div> 

        // JSX code goes there above this line 

    )
}

export default Forecast;