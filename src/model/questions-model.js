const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const QuestionsSchema = new Schema({

title: {
    type:String,
    required:true
},

chapterId: {
    type:Schema.Types.ObjectId,
    ref:'Chapters',
   required:true  
},

marks: {
    type: Number,
    required:true
}
});

module.exports=mongoose.model('questions',QuestionsSchema);

// title:'',
// chapterId:'',
// marks:2,
// description:Object
