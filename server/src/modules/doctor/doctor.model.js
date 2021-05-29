import mongoose, { Schema } from 'mongoose';
   
   const   DoctorSchema = new   Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    hospitalname:{
        type:String,
        trim: true,
        required: [true, 'Hospital name is required!'],
      },
    workhours:{
        type:String,
        trim: true,
    }  
   })
  DoctorSchema.methods = {
    toJSON() {
      return {
        _id: this._id,
        user: this.user,
        hospitalname:this.hospitalname
      };
    },
  };
  export default   mongoose.model('Doctor', DoctorSchema);