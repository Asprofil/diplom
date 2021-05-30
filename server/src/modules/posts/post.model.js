import mongoose, { Schema } from 'mongoose';
   import   uniqueValidator from 'mongoose-unique-validator';
   
   const   PostSchema = new   Schema({
     title: {
       type: String,
       trim: true,
       default:null,
     },
     parentid:{
        type:String,
        trim:true,
        default:null,
     },
     doctorid:{
      type:String,
      trim:true,
      default:null,
   },
     text: {
       type: String,
       trim: true,
       required: [true, 'Text   is required!'],
       minlength: [10, 'Text   need to be longer!'],
     },
     user: {
       type: Schema.Types.ObjectId,
       ref: 'User',
     },
     favoriteCount: {
       type: Number,
       default: 0,
     },
   }, { timestamps: true   });
   
   PostSchema.plugin(uniqueValidator, {
     message: '{VALUE} already taken!',
   });
   
   PostSchema.pre('validate', function (next) {
     next();
   });
   
   PostSchema.methods = {
    toJSON() {
      return {
        _id: this._id,
        title: this.title,
        text: this.text,
        parentid:this.parentid,
        createdAt: this.createdAt,
        user: this.user,
        doctorid:this.doctorid,
        favoriteCount: this.favoriteCount,
      };
    },
  };
   
   PostSchema.statics = {
     createPost(args, user) {
       return this.create({
         ...args,
         user,
       });
     },
   };
   
   export default   mongoose.model('Post', PostSchema);