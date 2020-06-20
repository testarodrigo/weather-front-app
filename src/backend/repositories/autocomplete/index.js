const axios = require("axios");

module.exports = function factory(config) {
  function getCitiesByHint(hint) {
    return axios.get(`${config.apiHost}${config.autocomplete.cities}${hint}`);
  }

  return { getCitiesByHint };
};
