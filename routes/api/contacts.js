const express = require('express')
const router = express.Router()

const {validation,controllerWrapper,authenticate} = require('../../middlewares')
const {products:productsSchema} = require('../../schemas')


// const {updateContacts,deleteContacts,addContacts,getContactsById,getContacts,updateFavoriteContacts} = require('../../controllers/contacts')

const {contact} = require('../../controllers')


router.get('/',authenticate, controllerWrapper(contact.getContacts))

router.get('/:contactId',authenticate, controllerWrapper(contact.getContactsById))

router.post('/',authenticate, validation(productsSchema),controllerWrapper(contact.addContacts))

router.delete('/:contactId',authenticate, controllerWrapper(contact.deleteContacts))

router.put('/:contactId', authenticate, validation(productsSchema), controllerWrapper(contact.updateContacts))

router.patch('/:contactId/favorite',authenticate, controllerWrapper(contact.updateFavoriteContacts))

module.exports = router
