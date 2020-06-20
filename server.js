// Angular requires Zone.js
require("zone.js/dist/zone-node");

const express = require("express");
const proxy = require("http-proxy-middleware");
const config = require("./src/backend/config");
const bodyParser = require("body-parser");
const packageJson = require("./package.json");
const autocompleteRouter = require("./src/backend/routes/autocomplete");
const openweatherRouter = require("./src/backend/routes/weather");

// create express app
const app = express();

// set up engine for .html file
app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.set("views", `${__dirname}/dist/openweather/`);

// server static files
app.use(
  "/weather/assets",
  express.static(__dirname + "/dist/openweather", { index: false })
);

app.get("/health-check", (req, res) => {
  res.send({
    status: "ok",
    version: packageJson.version,
  });
});

app.get("/weather/api/config", (req, res) => {
  res.send(config);
});

app.use(bodyParser.json());

app.use("/weather/api", [autocompleteRouter, openweatherRouter]);

app.get("/*", (req, res) => {
  global["navigator"] = req["headers"]["user-agent"];
  res.render(`${__dirname}/dist/openweather/index`);
});

// start server and listen
app.listen(config.port, () => {
  console.log(`Angular server started on port ${config.port}`);
});
