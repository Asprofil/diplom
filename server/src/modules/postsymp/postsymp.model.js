import mongoose, { Schema } from 'mongoose';


   const  PostsympSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },
    symptom:{
        type: Schema.Types.ObjectId,
        ref: 'Symtom',
    }
   })
   PostsympSchema.methods = {
    toJSON() {
      return {
        _id: this._id,
        post:this.post,
        symptom:this.symptom
      };
    },
  };
  export default   mongoose.model('PostsymptomSchema', PostsympSchema);