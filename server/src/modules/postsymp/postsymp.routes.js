import { Router } from 'express';

 
 import * as PostsympController from './postsymp.controllers'
 import PostsympValidation from './postsymp.validations';
 import validate from 'express-validation';
 
 const routes = new Router();
 
 routes.post(
   '/',
   validate(PostsympValidation.createPostsymp),
   PostsympController.createPostsymp
 );

 routes.get('/:id', PostsympController.getPostsympById);
 
 export default routes;