import Joi from 'joi';
   
   export default   {
     createDoctor: {
       body: {
         hospitalname:   Joi.string().required(),
         workhours:   Joi.string().required(),
       },
     },
   };