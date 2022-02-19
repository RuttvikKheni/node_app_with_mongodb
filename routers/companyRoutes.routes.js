const express = require("express");
const route = express.Router();

const { getCompanies, createCompany, updateCompanyInfo, deleteCompany, getCompanyDetail } = require("./../controllers/companies.controller");

// get all companies with details
route.get("/", getCompanies);

// get one company info base on company id
route.get("/:cid", getCompanyDetail);

// create company
route.post("/", createCompany);

// for update company info
route.patch("/:cid", updateCompanyInfo);

// for delete company
route.delete("/:cid", deleteCompany);

module.exports = route;