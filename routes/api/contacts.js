const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { validation, controllerWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/", controllerWrapper(ctrl.getContacts));

router.get("/:id", controllerWrapper(ctrl.getContactById));

router.post("/", controllerWrapper(ctrl.addContact));

router.put("/:id", controllerWrapper(ctrl.updateContact));

router.delete("/:id", controllerWrapper(ctrl.removeContact));

router.patch(
  "/:contactId/favorite",
  controllerWrapper(ctrl.updateStatusContact)
);

module.exports = router;
