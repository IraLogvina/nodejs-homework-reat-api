// const {Contact} = require("../../model");

const Contacts = require('../../model/contacts');

const addContact = async(req, res)=> {
    const result = await Contacts.addContact(req.body);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            result
        }
    })
}

module.exports = addContact;