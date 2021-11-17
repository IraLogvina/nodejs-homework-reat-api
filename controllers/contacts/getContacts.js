const Contact = require("../../model/contacts");

const getContacts = async (_req, res, next) => {
  const userId = req.user._id;
  const data = await Contact.listContacts(userId, req.query);
  res.json({
    status: "success",
    message: "A requested list of contacts found!",
    data: { ...data },
  });
};


module.exports = getContacts;
