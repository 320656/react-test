const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// 使用您的 OpenWeatherMap API 密钥
const API_KEY = '6f7400a5be1e41e4b8e5e743259704fb';

app.get('/weather', async (req, res) => {
    // 从请求的查询参数中获取城市名称
    const city = req.query.city; // 现在城市名称来自于前端传递的参数

    if (!city) {
        return res.status(400).send('City is required');
    }

    try {
        // 使用传递过来的城市名称调用 OpenWeatherMap API
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);

        // 发送天气数据回前端
        res.json(response.data);
    } catch (error) {
        // 处理错误，例如，如果城市名称无效或API服务不可用
        res.status(500).send('Error retrieving weather data');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
