const router = require("express").Router();
const controller = require("../../controller/controller.js");

router.route("/new_account")
    .post(controller.createAccount)

router.route("/auth")
    .get(controller.loginAccount);



module.exports = router
