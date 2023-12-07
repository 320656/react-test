const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

// 使用您的 OpenWeatherMap API 密钥
const API_KEY = '6f7400a5be1e41e4b8e5e743259704fb';

app.get('/weather', async (req, res) => {
    try {
        // 假设我们查询纽约的天气
        const city = 'New York';

        // 调用 OpenWeatherMap API
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);

        // 发送天气数据回前端
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving weather data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
