const { model, Schema } = require("mongoose");

const CompanySchema = new Schema({
  company_name: { type: String, unique: true, required: true, trim: true },
  description: { type: String, trim: true },
  is_deleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = model("companies", CompanySchema);