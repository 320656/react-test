// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState('');

  const getWeather = async () => {
    const response = await axios.get('http://localhost:3001/weather');
    setWeather(response.data);
  };

  return (
    <div>
      <button onClick={getWeather}>获取天气</button>
      <p>{weather}</p>
    </div>
  );
}

export default App;
