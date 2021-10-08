const {Schema,model} = require('mongoose')

const ContactSchema = Schema({
    name: {
        type: String,
        minLength: 3,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        minLength: 6
    },
    favorite: {
        type: Boolean,
        default: false,
    },
},
    { versionKey: false, timestamps: true }
)

const Contact = model('contact',ContactSchema)
module.exports = Contact

