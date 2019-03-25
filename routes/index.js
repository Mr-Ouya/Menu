const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/menu", apiRoutes);

router.use("/", express.static(path.join(__dirname, "../client/build/index.html")));

module.exports = router;