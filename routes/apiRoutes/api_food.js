const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods
router.route("/")
    .get(controller.getAll);

// /foods/:name
router.route("/search")
    .get(controller.SearchItems);

// /foods/:id/:restaurant
router.route("/:name/:resturant")
    .get(controller.getItem);


router.route("/category/:category")
    .get(controller.getCategoryItems);





module.exports = router;
