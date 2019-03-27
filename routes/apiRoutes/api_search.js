const router = require("express").Router();
const controller = require("../../controller/controller");

// /foods


router.route("/:local/:foodtype/:price/:rating")
    .get(controller.SearchBtn);





module.exports = router;
