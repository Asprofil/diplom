import userRoutes from './users/user.routes';
import postRoutes from './posts/post.routes';
import doctorRoutes from "./doctor/doctor.routes";
import doctorspecializationRoutes from './doctorspecialization/doctorspecialization.routes'
import specializationRoutes from "./specialization/specialization.routes"
import postsympRoutes from "./postsymp/postsymp.routes"
import sypmtomRoutes from './symptom/symtom.routes'
import {
    authJwt
   } from '../services/auth.services';


   export default app => {
    app.use('/api/v1/users', userRoutes);
    app.use('/api/v1/posts', postRoutes);
    app.use('/api/v1/doctors', doctorRoutes);
    app.use('/api/v1/specialization', specializationRoutes);
    app.use('/api/v1/symptom',sypmtomRoutes)
    app.use('/api/v1/doctorspecialization', doctorspecializationRoutes);
    app.use('/api/v1/postsymp', postsympRoutes);
    app.get('/hello', authJwt, (req, res) => {
    res.send('This is a private route!!!!');
    });
   };