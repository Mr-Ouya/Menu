const router = require("express").Router;
const food = require("./api_food");
const resturants = require("./api_resturants");
const accounts = require("./api_account");


router.use("/food", food);

router.use("/resturant", resturants);

router.use("/user", accounts);





module.exports = router;