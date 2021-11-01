const createError = require('http-errors')
const gravatar = require('gravatar')
const {nanoid} = require('nanoid')
const {User} = require('../../model/user')
const {sendEmail} = require('../../utils')


const register = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user) {
        throw new createError(409, `Email - ${email} is already register`)
    }
    const avatar = gravatar.url(email)
    const verifyToken = nanoid()
    const newUser = new User({email, avatar, verifyToken})
    newUser.setPassword(password)
    await newUser.save()
    const mail = {
        to: email,
        subject: "confirmation of registration",
        html: `<a href="http://localhost:${process.env.PORT}/api/user/verify/${verifyToken}">Click here</a>`
    }
    const success = await sendEmail(mail)
    if (success !== true) {
        throw new createError(500, `Email - ${email} is not send`)
        return
    }

    res.status(201)
    res.json({
        status: "success",
        code: 201,
        user: {
            email: newUser.email,
            subscription: newUser.subscription
        }
    })

}
module.exports = register
