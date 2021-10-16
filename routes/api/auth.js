const express = require('express')

const {validation,controllerWrapper, authenticate} = require('../../middlewares')

const {joiSchema:userSchema} = require('../../model/user')

const {auth} = require('../../controllers')

const router = express.Router()


router.post('/register',validation(userSchema),controllerWrapper(auth.register))

router.post('/login',validation(userSchema),controllerWrapper(auth.login))

router.get('/logout',authenticate, controllerWrapper(auth.logout))



module.exports = router

