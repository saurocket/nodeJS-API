const createError = require('http-errors')

const {addContact} = require('../../model/index')

const createContacts = async (req, res, next) => {
    const result = await req.body

    const ok = await addContact(result)

    if (!ok) {
        throw createError(400, 'something wrong')
    }

    if (ok) {
        res.status(201).json({
            status: 'success',
            code: 201,
            data: {result},
        })
    }
}
module.exports=createContacts
