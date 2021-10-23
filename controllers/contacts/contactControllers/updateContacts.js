const createError = require('http-errors')
const Contact = require('../../../model/Contact')


const updateContacts = async (req, res, next) => {
    const {contactId} = req.params
    const ownerId = req.user._id
    const body = req.body
    const contact = await Contact.findOneAndUpdate({_id:contactId, owner: ownerId}, body, {new: true})
    if (!contact) {
        throw new createError(404, `Contact with id ${contactId} is not found`)
    }
    res.status(200)
    res.json({
        status: 'success',
        code: 200,
        data: contact
    })
}
module.exports = updateContacts
