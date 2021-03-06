import mongoose, { Schema } from 'mongoose';

   const  SymtomSchema = new Schema({
       name:{
        type:String,
        required: [true, 'Name   is required!'],
        unique: true,
       }
   })
   SymtomSchema.methods = {
    toJSON() {
      return {
        _id: this._id,
        name:this.name
      };
    },
  };
  export default   mongoose.model('Symtom', SymtomSchema);