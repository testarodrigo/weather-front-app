const axios = require("axios");

module.exports = function factory(config) {
  function getTopFiveCitiesWeather() {
s    return axios.get(`${config.apiHost}${config.weather.cities}`);
  }

  function getCityWeather(city) {
    return axios.get(`${config.apiHost}${config.weather.city}${city}`);
  }

  function getAllWeather(params) {
    return axios.get(`${config.apiHost}${config.weather.all}`, { params });
  }

  return { getTopFiveCitiesWeather, getCityWeather, getAllWeather };
};
