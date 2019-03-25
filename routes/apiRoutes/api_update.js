const router = require("express").Router();
const controller = require("../../controller/controller");

router.route("/updateItem")
    .get(controller.UpdateInfoRest);

router.route("/updateResturant")
    .get(controller.getResturantMenu);






module.exports = router;