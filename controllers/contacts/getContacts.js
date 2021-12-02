const Contact = require("../../model/contacts");

const getContacts = async (_req, res, next) => {

  try {
    const contacts = await Contact.listContacts();
    return res.json({
      status: "Success",
      message: "Contacts found",
      data: { contacts },
    });
  } catch (err) {
    next(err);
  }
};


module.exports = getContacts;


// const userId = req.user._id;
// const data = await Contact.listContacts(userId, req.query);
// res.json({
//   status: "success",
//   message: "A requested list of contacts found!",
//   data: { ...data },
// });