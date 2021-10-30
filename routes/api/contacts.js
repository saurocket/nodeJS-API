const express = require('express')
const router = express.Router()

const {validation,controllerWrapper,authenticate} = require('../../middlewares')

const {joiSchema:contactSchema} = require('../../model/Contact')

const {contact} = require('../../controllers')

router.get('/',authenticate, controllerWrapper(contact.getContacts))

router.get('/:contactId',authenticate, controllerWrapper(contact.getContactsById))

router.post('/',authenticate, validation(contactSchema),controllerWrapper(contact.addContacts))

router.delete('/:contactId',authenticate, controllerWrapper(contact.deleteContacts))

router.put('/:contactId', authenticate, validation(contactSchema), controllerWrapper(contact.updateContacts))

router.patch('/:contactId/favorite',authenticate, controllerWrapper(contact.updateFavoriteContacts))

module.exports = router
