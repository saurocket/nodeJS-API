const createError = require('http-errors')
const Contact = require('../../model/Contact')

const createContacts = async (req, res, next) => {
    const result = await Contact.create(req.body)

        res.status(201).json({
            status: 'success',
            code: 201,
            data: {result},
        })

}
module.exports=createContacts
