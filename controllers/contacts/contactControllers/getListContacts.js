const createError = require('http-errors')
const Contact = require('../../../model/Contact')


const getListContacts = async (req, res, next) => {
    const {page = 1, limit = 5} =req.query
    const {favorite} = req.query
    const filter = {
        filter: false,
        favorite: null
    }
    if(favorite === 'true' || favorite === 'false'){
        favorite === 'true' ? filter.favorite = true: filter.favorite = false
        filter.filter = true
    }

    if (Number.isNaN(+page) || Number.isNaN(+limit)){
        throw new createError(400, 'query paras are wrong')
    }
    const skip = ((+page -1) * +limit)
    const ownerId = req.user._id
    const contacts = filter.filter ?
        await Contact.find({owner: ownerId, favorite: filter.favorite},"",{skip ,limit: +limit}).populate("owner", "email"):
        await Contact.find({owner: ownerId},"",{skip ,limit: +limit}).populate("owner", "email")

    res.status(200).json({
        status: "success",
        code: 200,
        data: {
            contacts
        }
    })
   }
module.exports = getListContacts
