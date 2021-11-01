const subscription = require('./userController/subscription')
const updateAvatar = require('./userController/updateAvatar')
const verifyUser = require('./userController/verifyUser')
const verifyUpdateLink = require('./userController/verifyUpdateLink')

module.exports = {
    subscription,
    updateAvatar,
    verifyUser,
    verifyUpdateLink
}
