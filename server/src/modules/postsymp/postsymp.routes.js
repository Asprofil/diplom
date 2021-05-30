import { Router } from 'express';

 
 import * as PostsympController from './postsymp.controllers'

 
 const routes = new Router();
 
 routes.post(
   '/',
   PostsympController.createPostsymp
 );

 routes.get('/:id', PostsympController.getPostsympById);
 
 export default routes;