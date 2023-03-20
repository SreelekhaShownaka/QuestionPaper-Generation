const QuestionsModel=require('../model/questions-model');
const QuestionsDAO={

    register:(payload) => {
         console.log('data inside dao page',payload);

         return new QuestionsModel({
            title:payload.title,
            chapterId:payload.chapterId,
            marks:payload.marks
         }).save();
    },

       createQuestions:(payload)=>{
        console.log('condition for create',payload);
        return QuestionsModel.createOne(payload);
       }  ,

       getAllQuestions:() => {
        return QuestionsModel.find({});
    }, 
      
      updateQuestions: (condition,payload) => {
        console.log('condition for update dao', condition,'data to be updated as', payload);
        return QuestionsModel.updateOne(condition,{$set:payload});
      },

      deleteQuestions: (condition) => {
        console.log('condition for update dao', condition, 'data to be updated as ');
        return QuestionsModel.deleteOne(condition);

    }

}

    module.exports= QuestionsDAO

      
       

       


