import { Router } from 'express';
import validate from 'express-validation';
 
 import * as symtomController from './symtom.controllers';
 import symptomValidation from './symtom.validations';
 
 const routes = new Router();
 
 routes.symptom(
   '/',
   validate(symptomValidation.createSymptom),
   symptomController.createSymptom
 );

 routes.get('/:id', symptomController.getSymptomById);
 
 export default routes;