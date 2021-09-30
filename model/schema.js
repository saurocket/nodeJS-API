const Joi = require('joi')


const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow:false}}).required(),
    phone: Joi.string().length(10).pattern(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
})

module.export = joiSchema
