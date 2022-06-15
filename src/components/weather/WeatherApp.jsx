import React, { useState, useEffect } from "react";
import "./Weather.scss";
import Sun from "../../assets/images/sun.png";

const WeatherApp = () => {
  const [data, setData] = useState({});
  const APIkey = "895284fb2d2c50a520ea537456963d9c";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=${APIkey}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [URL]);

  return (
    <div className="weatherApp">
      <div className="top">
        <div className="location">
          <img src={Sun} alt="" />
          <h1>{data.name}</h1>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
