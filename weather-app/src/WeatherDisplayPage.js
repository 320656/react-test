import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function WeatherDisplayPage() {
  const { location } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // 示例中，根据选定的地区获取天气和温度信息，这里可以调用相应的API获取数据
    const dummyWeatherData = {
      location,
      temperature: '25°C',
      weather: 'Sunny',
    };
    setWeatherData(dummyWeatherData);
  }, [location]);

  return (
    <div>
      <h1>Weather for {weatherData && weatherData.location}</h1>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.temperature}</p>
          <p>Weather: {weatherData.weather}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplayPage;
