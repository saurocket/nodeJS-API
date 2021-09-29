const createError = require('http-errors')
const {updateContact} = require('../../model/index')



const updateContacts = async (req, res, next) => {
    const {contactId} = req.params
    const result = req.body
    const message = await updateContact(contactId, result)
    if (!message) {
        throw new createError(404, `Contact with id ${contactId} is not found`)
    }
    res.json({
        status: 'success',
        code: 200,
        data: message
    })
}
module.exports = updateContacts
