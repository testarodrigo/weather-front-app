const express = require("express");
const router = express.Router();
const config = require("../../config");

const autocomplete = require("../../repositories/autocomplete")(config);

router.get("/autocomplete/cities", (req, res) => {
  autocomplete
    .getCitiesByHint(req.query.hint)
    .then((data) => res.json(data.data))
    .catch((err) =>
      res.json({ error: err.status, message: err.message }).status(err.status)
    );
});

module.exports = router;
