const createError = require('http-errors')
const {removeContact} = require('../../model/index')

const deleteContacts = async (req, res, next) => {
    const {contactId} = req.params
    const message = await removeContact(contactId)
    if (!message) {
        throw new createError(404, 'contact is not Found')
    }
    res.json({
        status: "success",
        code: 200,
        data: message
    })
}

module.exports = deleteContacts
