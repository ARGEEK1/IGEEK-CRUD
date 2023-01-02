var express = require('express');
var router = express.Router();
const homeControllers = require("../controllers/homeControllers")
/* GET home page. */
router.get('/', homeControllers.home);

module.exports = router;