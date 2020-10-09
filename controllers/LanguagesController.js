var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
const axios = require("axios");
var moment = require("moment");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GETS A SINGLE USER FROM THE DATABASE
router.get("/:date", function (req, res) {
  var userDate = new moment(req.params.date);
  if (moment.now() < userDate)
    res.status(400).json({ message: "Please provide an earlier date." });
  else {
    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>" +
          req.params.date +
          "&sort=stars&order=desc?page=1&per_page=100"
      )
      .then(function (response) {
        let langs = new Map();
        for (var i = 0; i < response.data.items.length; i++) {
          if (!langs.has(response.data.items[i].language)) {
            langs.set(response.data.items[i].language, [
              {
                name: response.data.items[i].name,
                description: response.data.items[i].description,
              },
            ]);
          } else {
            var value = langs.get(response.data.items[i].language);
            value.push({
              name: response.data.items[i].name,
              description: response.data.items[i].description,
            });
            langs.set(response.data.items[i].language, value);
          }
        }
        let obj = { result: { Languages: {} } };

        langs.forEach(function (value, key) {
          obj.result.Languages[key] = {
            "Number of Repos": value.length,
            Repos: value,
          };
        });

        res.json(obj);
      })
      .catch(function (error) {
        if (error.response.status == 422)
          res
            .status(400)
            .json({ message: "Please provide correct date format" });
        console.log(error);
      });
  }
});

module.exports = router;
