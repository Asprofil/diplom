import mongoose, { Schema } from 'mongoose';


   const  DoctorspecializationSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    specialization:{
        type: Schema.Types.ObjectId,
        ref: 'Specialization',
    }
   })
   DoctorspecializationSchema.methods = {
    toJSON() {
      return {
        _id: this._id,
        doctor:this.doctor,
        specialization:this.specialization
      };
    },
  };
  export default   mongoose.model('DoctorspecializationSchema', DoctorspecializationSchema);