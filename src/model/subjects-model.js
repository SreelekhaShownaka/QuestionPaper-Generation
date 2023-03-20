const mongoose=require('../../database');
const Schema = mongoose.Schema;


const SubjectsSchema = new Schema({
  name: {
   type:String,
   required:true
  },
  class: {
    type:String,
   required:true
  },
  school: {
    type:String,
   required:true
  }
  // subjectId:{
  //   type:_id,
  //   required:true
  // }
});

module.exports= mongoose.model('subjects',SubjectsSchema); 

