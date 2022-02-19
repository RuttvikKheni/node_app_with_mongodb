require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./models");
const routers = require("./routers/");

const app = express();

const { PORT } = process.env;

// body parser middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// view APIs logs in console
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// API routes configuration
app.use("/api", routers);

// listen server on defined port
app.listen(PORT, () => console.log(`server is running on ${PORT}`));