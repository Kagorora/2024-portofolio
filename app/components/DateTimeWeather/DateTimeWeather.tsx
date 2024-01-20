'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import getWeather from '../../utility/api';

const DateTimeWeather: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [weather, setWeather] = useState<string>('');

  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherIcon, setWeatherIcon] = useState<string | null>('');

  useEffect(() => {
    getWeather('Kigali').then((data) => {
      const temperatureCelsius = data.main.temp - 273.15;
      setTemperature(temperatureCelsius);
      setWeatherIcon(data.weather[0].icon);
    });

    // Update date and time every second
    const intervalId = setInterval(() => {
      const currentDateTime = new Date();
      const formattedDateTime = format(currentDateTime, 'HH:mm bb');
      setTime(formattedDateTime);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="date-time-weather">
      {temperature !== null && weatherIcon && (
        <div className="weather-icon-container">
          <img
            src={`/icons/${weatherIcon}.png`} // Assuming icons are in the 'public/icons' folder
            alt="Weather Icon"
            width="50"
            height="50"
          />
        </div>
      )}
      <p className="label">Current Location</p>
      <div className="location">Kigali, Rwanda {time}</div>
      {temperature !== null && (
        <div className="weather-details">
          <span className="temperature"> {temperature.toFixed(0)} °C</span>
        </div>
      )}
    </div>
  );
};

export default DateTimeWeather;
