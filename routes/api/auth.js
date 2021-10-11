const express = require('express')

const {validation,controllerWrapper} = require('../../middlewares')

const {products:productsSchema} = require('../../schemas')

const {auth} = require('../../controllers')

const router = express.Router()


router.post('/register',controllerWrapper(auth.register))

router.post('/login',controllerWrapper(auth.login))

router.get('/logout', controllerWrapper(auth.logout))



module.exports = router

