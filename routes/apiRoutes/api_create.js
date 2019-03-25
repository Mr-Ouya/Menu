const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods
router.route("/createItem")
    .get(controller.createItem);

// /foods/:name
router.route("/createResutant")
    .get(controller.SearchItems);

// /foods/:id/:restaurant





module.exports = router;