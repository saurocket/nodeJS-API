const createError = require('http-errors')

const {User} = require('../../model/user')

const register = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user){
        throw new createError(409, `Email - ${email} is already register`)
    }
    const newUser = new User({email})
    newUser.setPassword(password)
    await newUser.save()

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
