const express = require('express')

const router = express.Router()
const {validation, controllerWrapper, authenticate, upload} = require('../../middlewares')

const {joiSchemaSubscription: userSchema} = require('../../model/user')

const {subscription,updateAvatar} = require('../../controllers/user')


router.patch('/subscription', authenticate, validation(userSchema), controllerWrapper(subscription))

router.patch('/avatars', authenticate,upload.single("avatar"), controllerWrapper(updateAvatar))

module.exports = router
