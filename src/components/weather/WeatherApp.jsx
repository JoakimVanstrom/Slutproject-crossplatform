import React, { useState, useEffect } from 'react';

const WeatherApp = () =>  {
    const [data, setData] = useState({});
    const APIkey = '895284fb2d2c50a520ea537456963d9c'
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${APIkey}`

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(json => setData(json))
    }, [URL])
    

    return (
        <div className="weatherApp">
              <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} m/s</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        </div>
    );
}

export default WeatherApp;