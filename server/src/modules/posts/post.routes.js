import { Router } from 'express';
import validate from 'express-validation';
 
 import * as postController from './post.controllers';
 import { authJwt } from '../../services/auth.services';
 import postValidation from './post.validations';
 
 const routes = new Router();
 
 routes.post(
   '/',
   authJwt,
   validate(postValidation.createPost),
   postController.createPost
 );
 routes.get('/p', postController.getParentPosts);
 routes.get('/:id', postController.getPostById);
 routes.get('/user/:id', postController.getPostByUserId);
 routes.get('/', postController.getAllPosts);
 
 export default routes;