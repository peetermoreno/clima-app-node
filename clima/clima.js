const axios = require('axios');

const getClima = async (lat, long) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=c697c77b78c7fd6d1abd7dd13426b2fe`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}