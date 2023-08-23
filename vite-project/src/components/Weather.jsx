import React, { useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("sunny");
  const [tempCelcius, setTempCelcius] = useState(27);

  const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather);
    setTempCelcius(newTemp);
  };

  return (
    <div className="Weather componentBox">
      <h2>Today's Weather</h2>

      <div>
        <strong>{weather}</strong> with a temp of
        <Temperature temp={tempCelcius} units="F" />
      </div>

      <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
  );
}

function CheckWeather({ onWeatherChange }) {
  const weatherTypes = [
    "sunny",
    "windy",
    "raining",
    "cloudy",
    "snowing",
    "humid",
    "hail"
  ];

  const randomWeather = () => {
    const newTemp = Math.floor(Math.random() * 40);
    const newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);

    onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };

  return <button onClick={randomWeather}>Check Weather</button>;
}

function Temperature({ temp, units = "C" }) {
  const [currentUnits, setCurrentUnits] = useState(units);

  let displayTemp = currentUnits === "C" ? temp : (temp * 9) / 5 + 32;

  const handleConvertTemp = () => {
    if (currentUnits === "C") {
      setCurrentUnits("F");
      displayTemp = (temp * 9) / 5 + 32;
    } else {
      setCurrentUnits("C");
      displayTemp = ((temp - 32) * 5) / 9;
    }
  };

  return (
    <span className="Temperature">
      <strong>
        {parseInt(displayTemp)}&deg;{currentUnits}
      </strong>
      <button onClick={handleConvertTemp}>Convert</button>
    </span>
  );
}

export default Weather;
