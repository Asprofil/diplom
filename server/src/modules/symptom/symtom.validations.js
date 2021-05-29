import Joi from 'joi';
   
   export default   {
     createDoctor: {
       body: {
         name:   Joi.string().required(),
       },
     },
   };