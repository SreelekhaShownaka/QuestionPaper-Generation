const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const questionsSchema = new Schema({

title: {
    type:String,
    required:true
},

chapterId: {
   type:String,
   required:true    
},

marks: {
    type: Number,
    required:true
}
});



// title:'',
// chapterId:'',
// marks:2,
// description:Object
