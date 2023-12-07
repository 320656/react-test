// client/src/WeatherDisplay.js

import React from 'react';

function WeatherDisplay({ data }) {
  // 将 UNIX 时间戳转换为可读的日期时间格式
  const convertTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US");
  };

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p><strong>Condition:</strong> {data.weather[0].main} ({data.weather[0].description})</p>
      <p><strong>Temperature:</strong> {data.main.temp} °C (feels like {data.main.feels_like} °C)</p>
      <p><strong>Humidity:</strong> {data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
      <p><strong>Sunrise:</strong> {convertTimestamp(data.sys.sunrise)}</p>
      <p><strong>Sunset:</strong> {convertTimestamp(data.sys.sunset)}</p>
    </div>
  );
}

export default WeatherDisplay;
