import Joi from 'joi';
   
   export default   {
    createDoctorspecialization: {
       body: {
      doctor: Joi.string(),
      specialization: Joi.string(),
       },
     },
   };