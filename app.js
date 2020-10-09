var express = require("express");
var app = express();

var LanguagesController = require("./controllers/LanguagesController");
app.use("/languages", LanguagesController);

module.exports = app;
