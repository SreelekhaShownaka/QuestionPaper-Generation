

const mongoose=require('../../database');
const Schema = mongoose.Schema;


const ChaptersSchema = new Schema({
    name: {
        type:String,
        required:true
       },
       subjectId: {
         type:Schema.Types.ObjectId,
         ref:'subjects',
        required:true
       }
});

module.exports= mongoose.model('Chapters',ChaptersSchema); 

