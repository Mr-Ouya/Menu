const router = require("express").Router();
const controller = require("../../controller/controller.js");

router("/new_account")
    .get(controller.createAccount)

router("/auth")
    .get(controller.loginAccount);



module.exports = router
