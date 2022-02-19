const CompanyModel = require("../models/companies.model");

// get all companies with details
const getCompanies = async (req, res) => {
  try {
    const getAllCompanies = await CompanyModel.find({ is_deleted: false }).select(["-__v", "-createdAt", "-updatedAt", "-is_deleted"]);

    if (!getAllCompanies.length)
      throw new Error("companies  not found");

    return res.status(200).json({ status: true, companies: getAllCompanies });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message || "Something went wrong" });
  }
}

// get one company info base on company id
const getCompanyDetail = async (req, res) => {
  try {
    const { cid } = req.params;
    const companyDetails = await CompanyModel.findOne({ _id: cid, is_deleted: false }).select(["-__v", "-createdAt", "-updatedAt", "-is_deleted"]);

    if (!companyDetails)
      throw new Error("companies  not found");

    return res.status(200).json({ status: true, company: companyDetails });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message || "Something went wrong" });
  }
}

// create company
const createCompany = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description)
      throw new Error("company name and description both are required");

    const newCompany = new CompanyModel({ company_name: name, description: description });

    return res.status(200).json({ status: true, company: await newCompany.save() });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message || "Something went wrong" });
  }
}

// for update company info
const updateCompanyInfo = async (req, res) => {
  try {
    const { cid } = req.params;
    const { name, description } = req.body;

    const new_info = await CompanyModel.findByIdAndUpdate(cid, { company_name: name, description });
    if (!new_info)
      throw new Error("company not found");

    return res.status(200).json({ status: true, company: "company info updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message || "Something went wrong" });
  }
}

// for delete company
const deleteCompany = async (req, res) => {
  try {
    const { cid } = req.params;
    const company = await CompanyModel.findByIdAndUpdate(cid, { is_deleted: true });
    if (!company)
      throw new Error("company not found");

    return res.status(200).json({ status: true, company: "company deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error: error.message || "Something went wrong" });
  }
}


module.exports = { getCompanies, getCompanyDetail, createCompany, updateCompanyInfo, deleteCompany };