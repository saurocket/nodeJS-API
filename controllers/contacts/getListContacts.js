const Contact = require('../../model/Contact')


const getListContacts = async (req, res, next) => {
    const contacts = await Contact.find({})
    console.log(contacts)
    res.json({
        status: "success",
        code: 200,
        data: {
            contacts
        }
    })
   }
module.exports = getListContacts
