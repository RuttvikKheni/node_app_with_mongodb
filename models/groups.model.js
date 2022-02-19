const { model, Schema } = require("mongoose");

const GroupSchema = new Schema({});

module.exports = model("group", GroupSchema);