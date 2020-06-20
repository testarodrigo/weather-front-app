const express = require("express");
const router = express.Router();
const config = require("../../config");

const weather = require("../../repositories/weather")(config);

router.get("/weather/cities", (req, res) => {
  weather
    .getTopFiveCitiesWeather()
    .then((data) => res.json(data.data))
    .catch((err) =>
      res.json({ error: err.status, message: err.message }).status(err.status)
    );
});

router.get("/weather/cities/:city", (req, res) => {
  weather
    .getCityWeather(req.params.city)
    .then((data) => res.json(data.data))
    .catch((err) =>
      res.json({ error: err.status, message: err.message }).status(err.status)
    );
});

router.get("/weather/all", (req, res) => {
  weather
    .getAllWeather(req.query)
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) =>
      res.json({ error: err.status, message: err.message }).status(err.status)
    );
});

module.exports = router;
