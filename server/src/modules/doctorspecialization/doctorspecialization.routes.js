import { Router } from 'express';

 
 import * as doctorspecializationController from './doctorspecialization.controllers'

 
 const routes = new Router();
 
 routes.post(
   '/',
   doctorspecializationController.createDoctorspecialization
 );

 routes.get('/:id', doctorspecializationController.getDoctorspecializationById);
 
 export default routes;