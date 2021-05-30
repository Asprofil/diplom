import { Router } from 'express';
 import * as symptomController from './symtom.controllers'
 import symptomValidation from './symtom.validations';
 
 const routes = new Router();
 
 routes.symptom(
   '/',
   validate(symptomValidation.createSymptom),
   symptomController.createSymptom
 );

 routes.get('/:id', symptomController.getSymptomById);
 
 export default routes;