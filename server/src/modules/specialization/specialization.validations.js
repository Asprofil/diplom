import Joi from 'joi';
   
   export default   {
     createSpecialization: {
       body: {
         name:   Joi.string().required(),
       },
     },
   };