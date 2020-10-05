let express = require('express');
let router = express.Router();
let controllerLogin = require("../controllers/api/controllerLogin");

router.get("/Login", controllerLogin.controllerLogin);

module.exports = router;