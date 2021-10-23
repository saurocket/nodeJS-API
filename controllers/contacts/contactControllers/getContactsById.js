const createError = require('http-errors')
const Contact = require('../../../model/Contact')

const contactsById = async (req, res, next) => {
    const {contactId} = req.params
    const ownerId = req.user._id
    const contact = await Contact.findOne({_id:contactId, owner: ownerId}).populate("owner", "email")
    if (!contact) {
        throw new createError(404, `Product with id=${contactId}  not fount`)
    }
    res.status(200)
    res.json({
        status: 'success',
        code: 200,
        data: {contact}
    })
}

module.exports = contactsById
