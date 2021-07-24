const Joi = require('joi');

module.exports =  {
  payload: Joi.object({ 
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
  
    email: Joi.string()
      .email(),
    
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  })
} 
  