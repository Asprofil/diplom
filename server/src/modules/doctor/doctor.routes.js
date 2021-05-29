import { Router } from 'express';
import validate from 'express-validation';
 
 import * as postController from './post.controllers';
 import doctorValidation from './doctor.validations';
 
 const routes = new Router();
 
 routes.doctor(
   '/',
   validate(doctorValidation.createDoctor),
   DoctorController.createDoctor
 );

 routes.get('/:id', DoctorController.getDoctorById);
 
 export default routes;