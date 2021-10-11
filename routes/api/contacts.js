const express = require('express')
const router = express.Router()

const {validation,controllerWrapper} = require('../../middlewares')
const {products:productsSchema} = require('../../schemas')


// const {updateContacts,deleteContacts,addContacts,getContactsById,getContacts,updateFavoriteContacts} = require('../../controllers/contacts')

const {contact} = require('../../controllers')


router.get('/',controllerWrapper(contact.getContacts))

router.get('/:contactId', controllerWrapper(contact.getContactsById))

router.post('/', validation(productsSchema),controllerWrapper(contact.addContacts))

router.delete('/:contactId', controllerWrapper(contact.deleteContacts))

router.put('/:contactId',validation(productsSchema), controllerWrapper(contact.updateContacts))

router.patch('/:contactId/favorite', controllerWrapper(contact.updateFavoriteContacts))

module.exports = router
