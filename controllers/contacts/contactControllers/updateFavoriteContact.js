const createError = require('http-errors')
const Contact = require('../../../model/Contact')


const updateFavoriteContacts = async (req, res, next) => {
    const {contactId} = req.params
    const owenerId = req.user._id
    const favorite = req.body
    if(!favorite){
        throw new createError(400, `missing field favorite`)
    }
    const contact = await Contact
        .findOneAndUpdate({_id:contactId, owner: owenerId},
            {favorite:Object.values(favorite)[0]}, {new: true})
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
module.exports = updateFavoriteContacts
