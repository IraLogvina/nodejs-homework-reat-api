const express = require("express");

const {validation, authenticate, controllerWrapper} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");
const {joiSchema} = require("../../schema/user");

const router = express.Router();

router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login))

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

router.get("/current", authenticate, controllerWrapper(ctrl.currentUser));

module.exports = router;