import userRoutes from './users/user.routes';
import postRoutes from './posts/post.routes';
import {
    authJwt
   } from '../services/auth.services';

   export default app => {
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/posts', postRoutes);
    app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!!!');
    });
   };