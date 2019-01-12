"use strict";
exports.__esModule = true;
// load modules
var bodyParser = require("body-parser");
var compression = require("compression");
var ejs = require("ejs");
var express = require("express");
// load local modules
var routes_1 = require("./routes/routes");
var app = express();
var PORT = process.env.PORT || 8080;
// set up modules
app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(routes_1.Routes);
app.listen(PORT);
