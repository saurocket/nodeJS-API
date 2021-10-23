const createError = require('http-errors')
const Contact = require('../../../model/Contact')


const createContacts = async (req, res, next) => {
        const {user} = req
        console.log(user)
        const newContact = {...req.body, owner:user._id}

        const result = await Contact.create(newContact)

        res.status(201).json({
            status: 'success',
            code: 201,
            data: {result},
        })


}
module.exports=createContacts
