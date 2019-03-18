const router = require("express").Router;
const controller = require("../../controller.js");

router.route("/")
    .get(controller.SearchItems);

router.route("/:id")
    .get(controller.getItem)

router.route("/:category")



module.exports = router
