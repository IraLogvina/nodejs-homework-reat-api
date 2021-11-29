const Contact = require("../../model/contacts");

const updateStatusContact = async (req, res, next) => {
  try {
    const contact = await Contact.updateContact(req.params.contactId, req.body);
    if (contact) {
      return res.json({
        status: "Success",
        message: "Contact updated successfully",
        data: { contact },
      });
    } else {
      return res.status().json({
        status: "Error",
        message: "Not Found",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = updateStatusContact;
