// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay'; // 导入新组件

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (city) => {
    try {
      const response = await axios.get(`http://localhost:3001/weather?city=${city}`);
      setWeatherData(response.data); // 设置获取的天气数据
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Enter city name" />
      <button onClick={() => getWeather('New York')}>Get Weather</button>
      {weatherData && <WeatherDisplay data={weatherData} />} {/* 使用 WeatherDisplay 组件 */}
    </div>
  );
}

export default App;
