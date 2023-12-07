// server/index.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// OpenWeatherMap API 密钥
const API_KEY = 'your_api_key_here';

app.get('/weather', async (req, res) => {
    const city = req.query.city; // 获取查询参数中的城市名称
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving weather data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
