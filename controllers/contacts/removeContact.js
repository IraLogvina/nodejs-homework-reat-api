const {NotFound} = require("http-errors");

const {Contact} = require("../../model");

const removeContact = async(req, res)=> {
    const {id} = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if(!result){
        throw new NotFound(`Contact with id=${id} not found`);
    }
    // res.status(204).json()
    res.json({
        status: "success",
        code: 200,
        message: "Remove success"
    })
}

module.exports = removeContact