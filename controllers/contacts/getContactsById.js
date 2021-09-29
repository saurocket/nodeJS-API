const createError = require('http-errors')
const {getContactById} = require('../../model/index')

const contactsById = async (req, res, next) => {
    const {contactId} = req.params
    const contact = await getContactById(contactId)
    if (!contact) {
        throw new createError(404, `Product with id=${contactId}  not fount`)
    }
    res.json({
        status: 'success',
        code: 200,
        data: {contact}
    })
}

module.exports = contactsById
