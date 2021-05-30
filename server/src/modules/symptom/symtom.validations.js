import Joi from 'joi';
   
   export default   {
     createSymptom: {
       body: {
         name:   Joi.string().required(),
       },
     },
   };