const gravatar = require("gravatar");
const Contacts = require("../../model/contacts");

const addContact = async (req, res) => {

  const newContact = {...req.body, owner: req.user._id}
  const result = await Contacts.create(newContact);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
