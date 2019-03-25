const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods
router.route("/")
    .get(controller.getAll);

// /foods/:name
router.route("/:name")
    .get(controller.SearchItems);

// /foods/:id/:restaurant
router.route("/:name/:resturant")
    .get(controller.getItem);


router.route("/categories/:categories")
    .get(controller.getCategoryItems);





module.exports = router;
