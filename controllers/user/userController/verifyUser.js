const createError = require('http-errors')
const {User} = require('../../../model/user')

const verifyUser = async (req, res) => {
    const {verificationToken} = req.params
    const user = await User.findOne({verifyToken: verificationToken})
    console.log(user)
    if (!user) {
        throw new createError(404, `User not found`)
    }
    await User.findByIdAndUpdate(user._id, {verify: true, verifyToken: null})
    res.status(200)
    res.json({
        status: "success",
        code: 200,
        data: {
            message: 'Verification successful',
        }
    })
}

module.exports = verifyUser
