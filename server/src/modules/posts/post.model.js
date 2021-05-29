import mongoose, { Schema } from 'mongoose';
   import slug from   'slug';
   import   uniqueValidator from 'mongoose-unique-validator';
   
   const   PostSchema = new   Schema({
     title: {
       type: String,
       trim: true,
       required: [true, 'Title   is required!'],
       minlength: [3, 'Title   need to be longer!'],
       unique: true,
     },
     parentid:{
      type: Schema.Types.ObjectId,
      ref: 'Post',
     },
     text: {
       type: String,
       trim: true,
       required: [true, 'Text   is required!'],
       minlength: [10, 'Text   need to be longer!'],
     },
     slug: {
       type: String,
       trim: true,
       lowercase: true,
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
     this._slugify();
   
     next();
   });
   
   PostSchema.methods = {
    _slugify() {
      this.slug = slug(this.title);
    },
    toJSON() {
      return {
        _id: this._id,
        title: this.title,
        text: this.text,
        createdAt: this.createdAt,
        slug: this.slug,
        user: this.user,
        parentid:this.parentid,
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