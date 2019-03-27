const router = require("express").Router();
const food = require("./api_food");
const resturants = require("./api_resturants");
const accounts = require("./api_account");
const create = require("./api_create");
const update = require("./api_update");
const searchInquiry = require("./api_search");


router.use("/foods", food);

router.use("/user", accounts);

router.use("/create", create)

router.use("./update", update)

router.use("/resturant", resturants)

router.use("search/", searchInquiry)

// router.use("/signUp", signup);

// router.use("login", login)






module.exports = router;