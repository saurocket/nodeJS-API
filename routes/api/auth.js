const express = require('express')

const {validation,controllerWrapper} = require('../../middlewares')

const {joiSchema:userSchema} = require('../../model/user')

const {auth} = require('../../controllers')

const router = express.Router()


router.post('/register',validation(userSchema),controllerWrapper(auth.register))

router.post('/login',validation(userSchema),controllerWrapper(auth.login))

router.get('/logout', controllerWrapper(auth.logout))



module.exports = router

