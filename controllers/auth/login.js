const {User} = require('../../model/user')
const createError = require('http-errors')

const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user || !user.verify || !user.comparePassword(password)){
        throw new createError(401, `wrong password or email or email nor verify`)
    }
    const {SECRET_KEY}= process.env;
    const payload = {id: user._id}
    const token = jwt.sign(payload,SECRET_KEY)

    const updateTokern = await User.findByIdAndUpdate(user._id, {token}, {new: true})
    console.log(updateTokern)
    if (!updateTokern){
        throw new createError(404, `something wrong`)
    }
    res.status(200)
    res.json({
        status: "success",
        code: 200,
        data: {
            token: token,
            user: {
                email: user.email,
                subscription: user.subscription
            }
        }
    })
}
module.exports = login
