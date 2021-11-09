

const express = require("express");

const {contacts: ctrl} = require("../../controllers");

// const ctrl = require("../../controllers").contacts;

const {validation, controllerWrapper} = require("../../middlewares");
const {Contact} = require("../../schema/contactModel")

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getContacts));

router.get("/:id", controllerWrapper(ctrl.getContactById));

router.post("/", controllerWrapper(ctrl.addContact));

router.put("/:id",  controllerWrapper(ctrl.updateContact))

router.delete("/:id", controllerWrapper(ctrl.removeContact));

router.patch('/:contactId/favorite', );

module.exports = router;