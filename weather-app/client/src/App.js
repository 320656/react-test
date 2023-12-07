import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');

  const getWeather = async () => {
    try {
      // 注意这里的 URL 应该指向您的 Node.js 后端服务器的端口号（默认为3001）
      const response = await axios.get(`http://localhost:3001/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // 处理错误，可能是显示一个错误消息
      setWeather('Failed to fetch weather data.');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && <div>
        <h2>Weather Data:</h2>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </div>}
    </div>
  );
}

export default App;
