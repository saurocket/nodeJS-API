const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const subscription = require('../user/userController/subscription')

module.exports = {
    register,
    login,
    logout,
    subscription
}
