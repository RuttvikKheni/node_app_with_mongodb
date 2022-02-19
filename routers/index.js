const express = require("express");
const CompanyRoutes = require("./companyRoutes.routes");

const route = express.Router();

// companies routes
route.use("/companie", CompanyRoutes);

module.exports = route;