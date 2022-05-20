require("dotenv").config();
const debug = require("debug")("kinds:server:controllers:kindsControllers");
const Kind = require("../../models/Kind");

const getKindsList = async (req, res) => {
  const kinds = await Kind.find();
  res.status(200).json(kinds);
  debug("Kinds collection request received");
};

module.exports = { getKindsList };
