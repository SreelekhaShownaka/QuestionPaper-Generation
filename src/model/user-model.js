const mongoose=require('../../database');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
   type:String,
   required:true
  },
  email: {
    type:String,
   required:true
  },
  password: {
    type:String,
   required:true
  },
  phone: {
    type:Number,
   required:true
  },
  userId: {
    type:String,
    required:true
  }
});

module.exports= mongoose.model('users',UserSchema); 