import {
    Router
} from 'express';
import {
    authLocal
   } from '../../services/auth.services';

import validate   from 'express-validation';
import * as   userController from './user.controllers';
import   userValidation from './user.validations';
const routes = new Router();
routes.post('/signup', validate(userValidation.signup),   userController.signUp);
export default   routes;

routes.post('/login', authLocal, userController.login);
