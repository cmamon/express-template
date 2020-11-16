"use strict";

var bodyParser = require("body-parser");

var cors = require("cors");

var express = require("express");

var helmet = require("helmet");

var path = require("path");

var logger = require("morgan");

var router = require("./router");

var middlewares = require("./middlewares");

var app = express();
app.use(express["static"](path.join(__dirname, "public")));
app.use("/", router);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.use(express.json);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger("dev"));
app.use(cors());
app.use(helmet());
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("\x1b[32m%s\x1b[0m", "Server running on port " + port);
});