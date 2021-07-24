const Joi = require('joi');

module.exports =  {
  payload: Joi.object({ 
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
      
    value: Joi.number()
      .required(),

    quantity: Joi.number()
      .integer()
      .required()
  })
} 
  