const { connect } = require("mongoose");
const { DB } = process.env;

const connction = connect(DB);

connction.then(() => console.log("db connected...")).catch((error) => console.log(error));