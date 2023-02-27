/**
 */
const path = require("path");

const express = require("express");
const parser = require("body-parser");

const router = require("./routes/routes");
const app = express();

// using npm package to parse every request for possible data
app.use(parser.urlencoded({ extended: false })); //# needs to be on top .. so that every request could be parsed before reaching its relative handler

app.use(express.static(path.join(__dirname, "public")));

// now call to router which will auto create middleware for it

app.use(router);

// request source/ source for which server instance will listen the request
app.listen(3000, "localhost");
