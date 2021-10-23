
const {User} = require('../../../model/user')

const subscription = async (req, res) => {
    const {subscription = "starter"} = req.body
    const ownerId = req.user._id
    const user = await User.findByIdAndUpdate(ownerId,{subscription: subscription},{new: true})

    res.status(201)
    res.json({
        status: "success",
        code: 201,
        data: user

    })

}
module.exports = subscription



