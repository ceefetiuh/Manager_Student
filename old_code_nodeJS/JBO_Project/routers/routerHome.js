let express = require('express');
let router = express.Router();
let controllerHomepage = require("../controllers/controllerHomepage");

router.get("/", controllerHomepage.checkLogin, controllerHomepage.User, controllerHomepage.controllerHomePage);

module.exports = router;