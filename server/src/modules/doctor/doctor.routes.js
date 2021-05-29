import { Router } from 'express';

 
 import * as doctorController from './doctor.controllers';
 import doctorValidation from './doctor.validations';
 import validate from 'express-validation';
 const routes = new Router();
 
 routes.post(
   '/',
   validate(doctorValidation.createDoctor),
   doctorController.createDoctor
 );

 routes.get('/:id', doctorController.getDoctorById);
 routes.get('/', (req, res) => {
  res.send('Hello world!');
});

 export default routes;