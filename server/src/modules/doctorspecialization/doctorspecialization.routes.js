import { Router } from 'express';

 
 import * as doctorspecializationController from './doctorspecialization.controllers'
 import doctorspecializationValidation from './doctorspecialization.validations';
 import validate from 'express-validation';
 const routes = new Router();
 
 routes.post(
   '/',
   validate(doctorspecializationValidation.createDoctorspecialization),
   doctorspecializationController.createDoctorspecialization
 );

 routes.get('/:id', doctorspecializationController.getDoctorspecializationById);
 
 export default routes;