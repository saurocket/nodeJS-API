const express = require('express')

const router = express.Router()
const {validation,controllerWrapper, authenticate} = require('../../middlewares')

const {joiSchemaSubscription:userSchema} = require('../../model/user')

const {subscription} = require('../../controllers/user')


 router.patch('/subscription',authenticate,validation(userSchema),controllerWrapper(subscription))

module.exports = router
