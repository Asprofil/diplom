import userRoutes from './users/user.routes';
import postRoutes from './posts/post.routes';
import doctorRoutes from "./doctor/doctor.routes";
import specializationRoutes from "./specialization/specialization.routes"
import {
    authJwt
   } from '../services/auth.services';

   export default app => {
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/posts', postRoutes);
    app.use('/api/v1/doctor', doctorRoutes);
    app.use('/api/v1/specialization', specializationRoutes);
    app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!!!');
    });
   };