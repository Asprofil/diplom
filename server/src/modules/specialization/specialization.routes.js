import { Router } from 'express';
import validate from 'express-validation';
 
 import * as specializationController from './specialization.controllers'
 import specializationValidation from './specialization.validations';
 
 const routes = new Router();
 
 routes.post(
   '/',
   validate(specializationValidation.createSpecialization),
   specializationController.createSpecialization
 );

 routes.get('/:id', specializationController.getSpecializationById);
 routes.get('/', specializationController.getAllSpecializations);
 
 export default routes;