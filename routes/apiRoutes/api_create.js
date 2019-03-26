const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods
router.route("/createFood")
    .get(controller.createItem);

// /foods/:name
router.route("/createResturant")
    .get(controller.SearchItems);

// /foods/:id/:restaurant





module.exports = router;