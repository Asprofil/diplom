import { Router } from 'express';
import validate from 'express-validation';
 
 import * as doctorController from './doctor.controllers';
 import doctorValidation from './doctor.validations';
 
 const routes = new Router();
 
 routes.doctor(
   '/',
   validate(doctorValidation.createDoctor),
   doctorController.createDoctor
 );

 routes.get('/:id', doctorController.getDoctorById);
 
 export default routes;