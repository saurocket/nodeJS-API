const express = require('express')
const router = express.Router()

const {validation,controllerWrapper} = require('../../middlewares')
const {products:productsSchema} = require('../../schemas')


const {updateContacts,deleteContacts,addContacts,getContactsById,getContacts,updateFavoriteContacts} = require('../../controllers')




router.get('/',controllerWrapper(getContacts))

router.get('/:contactId', controllerWrapper(getContactsById))

router.post('/', validation(productsSchema),controllerWrapper(addContacts))

router.delete('/:contactId', controllerWrapper(deleteContacts))

router.put('/:contactId',validation(productsSchema), controllerWrapper(updateContacts))

router.patch('/:contactId/favorite', controllerWrapper(updateFavoriteContacts))

module.exports = router
