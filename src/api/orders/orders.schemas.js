const Joi = require('joi');

module.exports =  {
  payload: Joi.object({
    customer: Joi.object({
      id: Joi.number()
        .integer()
        .required(),
      name: Joi.string(),
      email: Joi.string()
    }).required(),
    status: Joi.string()
      .required(),
    amount: Joi.number()
      .required(),
    items: Joi.array()
      .items(Joi.object({
          product: Joi.object({
            id: Joi.number()
              .integer()
              .required(),
            name: Joi.string(),
            value: Joi.number(),
            quantity: Joi.number(),
          }),
          
          quantity: Joi.number()
            .integer()
            .required(),
          unitValue: Joi.number()
            .required()
      }))
      .required()
  })
} 
  