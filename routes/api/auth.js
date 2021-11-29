const express = require("express");

const {validation, authenticate, upload, controllerWrapper} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");
const {joiSchema} = require("../../schema/user");

const router = express.Router();

router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login))

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));

router.get("/current", authenticate, controllerWrapper(ctrl.currentUser));

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatarURL"),
    controllerWrapper(ctrl.updateIMG),
  );

module.exports = router;