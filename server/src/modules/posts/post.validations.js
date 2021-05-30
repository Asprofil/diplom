import Joi from 'joi';
   
   export default   {
     createPost: {
       body: {
         title:   Joi.string(),
         text:   Joi.string().required(),
         parentid: Joi.string(),
         doctorid: Joi.string(),
       },
     },
   };