import Joi from 'joi';
   
   export default   {
    createPostsymp: {
       body: {
      post: Joi.string(),
     symptom: Joi.string(),
       },
     },
   };