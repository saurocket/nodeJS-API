const getContacts = require('./contactControllers/getListContacts')
const getContactsById = require('./contactControllers/getContactsById')
const addContacts = require('./contactControllers/createContacts')
const deleteContacts = require('./contactControllers/deleteContacts')
const updateContacts = require('./contactControllers/updateContacts')
const updateFavoriteContacts = require('./contactControllers/updateFavoriteContact')
module.exports = {
    getContacts,
    getContactsById,
    addContacts,
    deleteContacts,
    updateContacts,
    updateFavoriteContacts
}
