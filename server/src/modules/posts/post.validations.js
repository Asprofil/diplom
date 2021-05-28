import Joi from 'joi';
   
   export default   {
     createPost: {
       body: {
         title:   Joi.string().required(),
         text:   Joi.string().required(),
       },
     },
   };