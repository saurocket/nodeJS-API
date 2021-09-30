
const {listContacts} = require('../../model/index')

const getListContacts = async (req, res, next) => {
    const contacts = await listContacts()
    res.json({
        status: "success",
        code: 200,
        data: {
            contacts
        }
    })
   }
module.exports = getListContacts
