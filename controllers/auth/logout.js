const {User} = require('../../model/user')

const logout = async (req, res) => {
   const ownerId = req.user._id
    await User.findByIdAndUpdate(ownerId,{token: null})

    res.status(204).json()
}
module.exports = logout
