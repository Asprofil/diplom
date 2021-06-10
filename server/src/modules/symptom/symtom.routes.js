import { Router } from 'express';
 import * as symptomController from './symtom.controllers'
 import symptomValidation from './symtom.validations';
 import validate from 'express-validation';
 const routes = new Router();
 
 routes.post(
   '/',
   validate(symptomValidation.createSymptom),
   symptomController.createSymptom
 );

 routes.get('/:id', symptomController.getSymptomById);
 
 export default routes;