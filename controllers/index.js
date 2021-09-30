const getContacts = require('./contacts/getListContacts')
const getContactsById = require('./contacts/getContactsById')
const addContacts = require('./contacts/createContacts')
const deleteContacts = require('./contacts/deleteContacts')
const updateContacts = require('./contacts/updateContacts')

module.exports = {
    getContacts,
    getContactsById,
    addContacts,
    deleteContacts,
    updateContacts
}
