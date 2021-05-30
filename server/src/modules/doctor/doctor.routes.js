import { Router } from 'express';

 
 import * as doctorController from './doctor.controllers';
 import { authJwt } from '../../services/auth.services';
 import doctorValidation from './doctor.validations';
 import validate from 'express-validation';
 const routes = new Router();
 
 routes.post(
   '/',
   authJwt,   
   validate(doctorValidation.createDoctor),
   doctorController.createDoctor
 );

 routes.get('/:id', doctorController.getDoctorById);
 routes.get('/user/:id', doctorController.getDoctorByUserId);
 routes.get('/', doctorController.getAllDoctor);

 export default routes;