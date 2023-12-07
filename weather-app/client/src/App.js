import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay'; // 导入新组件

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(''); // 添加一个新的状态来存储用户输入的城市名称

  const getWeather = async () => {
    if (!city) {
      alert('Please enter a city name.'); // 如果用户没有输入城市名称，显示一个提示
      return;
    }
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
      <input 
        type="text"
        value={city} // input的值与city状态绑定
        onChange={(e) => setCity(e.target.value)} // 当用户输入时更新city状态
        placeholder="Enter city name"
      />
      <button onClick={getWeather}>Get Weather</button> // 点击按钮时调用getWeather函数
      {weatherData && <WeatherDisplay data={weatherData} />} {/* 使用 WeatherDisplay 组件展示数据 */}
    </div>
  );
}

export default App;
