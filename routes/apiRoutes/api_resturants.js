const router = require("express").Router();
const controller = require("../../controller/controller.js");


router.route("/:name")
    .get(controller.findResturant);

router.route("/")
    .get(controller.getAllResturants);

router.route("/getMenu/:name")
    .get(controller.getResturantMenu);

router.route("/search")
     .get(controller.SearchResturant)


module.exports = router;