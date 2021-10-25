const {Schema, model} = require('mongoose')
const Joi = require('joi')

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
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    },
    {versionKey: false, timestamps: true}
)
const Contact = model('contact', ContactSchema)



const joiSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: false}}).required(),
    phone: Joi.string().min(6).pattern(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/).required()
})

module.exports = {
    Contact,
    joiSchema
}

