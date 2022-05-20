const express = require("express");
const { getKindsList } = require("../controllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/list", getKindsList);

module.exports = kindsRouter;
