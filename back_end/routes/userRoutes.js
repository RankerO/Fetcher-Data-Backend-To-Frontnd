const express = require("express");
const router = express.Router();
const { greaterthan10000, notincludeanydigit, tartswithM, averageincome, lowerthan5 } = require("../userControllers/allUsers");

router.route("/PriceGreaterThan10000").get(greaterthan10000);
router.route("/StartswithM").get(tartswithM);
router.route("/emailDoesNotIncludeAnyDigit").get(notincludeanydigit);
router.route("/DataofTop10Cities").get(averageincome);
router.route("/lowerThan5").get(lowerthan5);
module.exports = router;