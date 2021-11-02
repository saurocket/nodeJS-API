const createError = require('http-errors')
const {User} = require('../../../model/user')
const {sendEmail} = require('../../../utils')

const verifyUpdateLink = async (req, res) => {
    const {email} = req.body
    if (!email) {
        throw createError(400, "missing required field email")
    }
    const user = await User.findOne({email})

    if (!user){
        throw createError(404, `email - ${email} is not register`)
    }
    if (user.verify) {
        throw createError(400, `Verification has already been passed`)
    }

    const mail = {
        to: email,
        subject: "confirmation of registration",
        html: `<a href="http://localhost:${process.env.PORT}/api/user/verify/${user.verifyToken
        }">Click here</a>`
    }
    const success = await sendEmail(mail)
    if (success !== true) {
        throw new createError(500, `Something wrong`)
        return
    }

    res.status(200)
    res.json({
        status: "success",
        code: 200,
        message: "Verification email sent"
    })
}


module.exports = verifyUpdateLink
