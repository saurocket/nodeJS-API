const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const {User} = require('../model/user')


const authenticate = async (req, res, next) => {
    const [Bearer, token] = req.headers.authorization.split(' ')
    if(Bearer !== 'Bearer'){
        throw new createError(401, 'authorization error')
    }
    try {
        const {SECRET_KEY} = process.env
        const {id} = jwt.verify(token,SECRET_KEY)
        const user = await User.findById(id)
        if (!user || !user.token){
            throw new createError(401, 'authorization error')
        }
        req.user = user
        next()
    }catch (e) {
        e.status = 401
        next(e)
    }

}
module.exports = authenticate
