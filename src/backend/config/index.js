"use strict";

const Confidence = require("confidence");
const environment = require("./environment");
const pkgJson = require("../../../package.json");

const document = {
  $filter: "env",
  $base: {
    port: 8080,
    apiHost: "http://localhost:8080",
    apiPath: "/weather/api",
    appName: "weather",
    autocomplete: {
      cities: "/autocomplete/cities/",
    },
    weather: {
      cities: "/weather/cities",
      city: "/weather/cities/",
      all: "/weather/all",
    },
    version: pkgJson.version,
    environment: environment,
  },
  dev: {
    port: 4200,
  },
};

var store = new Confidence.Store(document);

var config = store.get("/", {
  env: environment,
});

module.exports = config;
