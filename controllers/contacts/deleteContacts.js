const createError = require('http-errors')
const Contact = require('../../model/Contact')

const deleteContacts = async (req, res, next) => {
    const {contactId} = req.params

    const contact = await Contact.findByIdAndDelete(contactId)
    if (!contact) {
        throw new createError(404, `contact with id - ${contactId}  is not Found`)
    }
    res.status(200)
    res.json({
        status: "success",
        code: 200,
        data: contact
    })
}

module.exports = deleteContacts
