const express = require('express')
const router = express.Router()

const {validation,controllerWrapper} = require('../../middlewares')
const {products:productsSchema} = require('../../schemas')


const {updateContacts,deleteContacts,addContacts,getContactsById,getContacts} = require('../../controllers')




router.get('/',controllerWrapper(getContacts))

router.get('/:contactId', controllerWrapper(getContactsById))

router.post('/', validation(productsSchema),controllerWrapper(addContacts))

router.delete('/:contactId', controllerWrapper(deleteContacts))

router.patch('/:contactId',validation(productsSchema), controllerWrapper(updateContacts))

module.exports = router
