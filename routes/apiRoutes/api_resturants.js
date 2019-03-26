const router = require("express").Router();
const controller = require("../../controller/controller.js");


router.route("/:id")
    .get(controller.findResturant);

router.route("/")
    .get(controller.getAllResturants);

router.route("/getMenu/:name")
    .get(controller.getResturantMenu);



module.exports = router;