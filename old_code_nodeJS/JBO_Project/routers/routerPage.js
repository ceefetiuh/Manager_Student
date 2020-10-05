let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let express = require('express');
let router = express.Router();
let controllerLoginPage = require("../controllers/controllerLoginPage");
let controllerAddMembersPage = require("../controllers/controllerAddMembersPage");
let controllerChangePassPage = require("../controllers/controllerChangePassPage");
let controllerEditInforPage = require("../controllers/controllerEditInforPage");

router.get("/login", controllerLoginPage.checkLogin, controllerLoginPage.authLogin, controllerLoginPage.controllerLoginPage);
router.post("/login", controllerLoginPage.checkLogin, controllerLoginPage.authLogin, controllerLoginPage.controllerLoginPage);

router.get("/AddMembers", controllerAddMembersPage.checkLogin, controllerAddMembersPage.User, controllerAddMembersPage.Validation, controllerAddMembersPage.controllerAddMembersPage);
router.post("/AddMembers", controllerAddMembersPage.checkLogin, controllerAddMembersPage.User, controllerAddMembersPage.Validation, controllerAddMembersPage.controllerAddMembersPage);

router.get("/ChangePass", controllerChangePassPage.checkLogin, controllerChangePassPage.User, controllerChangePassPage.Handle, controllerChangePassPage.controllerChangePassPage);
router.post("/ChangePass", controllerChangePassPage.checkLogin, controllerChangePassPage.User, controllerChangePassPage.Handle, controllerChangePassPage.controllerChangePassPage);

router.get("/EditInfor", controllerEditInforPage.checkLogin, controllerEditInforPage.User, controllerEditInforPage.Handle, controllerEditInforPage.controllerEditInforPage);
router.post("/EditInfor", controllerEditInforPage.checkLogin, controllerEditInforPage.User, controllerEditInforPage.Handle, controllerEditInforPage.controllerEditInforPage);

module.exports = router;