import { Router } from 'express';
import validate from 'express-validation';
 
 import * as specializationController from './specialization.controllers'
 import specializationValidation from './specialization.validations';
 
 const routes = new Router();
 
 routes.specialization(
   '/',
   validate(specializationValidation.createSpecialization),
   specializationController.createSpecialization
 );

 routes.get('/:id', specializationController.getSpecializationById);
 
 export default routes;