const fs = require('fs/promises')
const contacts = require('./contacts.json')
const path = require('path')


const PATH = path.join(__dirname, 'contacts.json')


const listContacts = async () => {
  const data = await fs.readFile(PATH)
  const contacts = JSON.parse(data)
  return contacts

}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(i => i.id === +contactId)
  if (index === -1) return null
  return contacts[index]
}

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const id = +contactId
  if(isNaN(id)){
    return null
  }
  const index = contacts.findIndex(i => i.id === id)
  if (index === -1) return null
  const deletedContact = contacts[index]
  contacts.splice(index, 1)
  await fs.writeFile(PATH, JSON.stringify(contacts))
  return deletedContact
}

const addContact = async (body) => {
  const contacts = await listContacts()
  const maxId = Math.max(...contacts.map(i => i.id))
  const contact = {id: maxId + 1,...body}
  const newContactList = [...contacts, contact]
  await fs.writeFile(PATH, JSON.stringify(newContactList))
  return `ok`

}

const updateContact = async (contactId, body) => {
   const contact = await listContacts()
  const index = contact.findIndex(i => i.id === +contactId)
  if (index === -1) return null
  contact[index] = {...contact[index], ...body}
  await fs.writeFile(PATH, JSON.stringify(contact))
  return contact[index]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
