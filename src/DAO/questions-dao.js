const QuestionsModel=require('../model/questions-model');
const QuestionsDAO={

  createQuestions:(payload) => {
         console.log('data inside dao page',payload);

         return new QuestionsModel({
            title:payload.title,
            chapterId:payload.chapterId,
            marks:payload.marks
         }).save();
    },

       getAllQuestions:() => {
        return QuestionsModel.find({}).populate({path:'chapterId',select:{name:1}});
    }, 

    getQuestionsByQuestionsId:(qnid) => {
      return QuestionsModel.find(qnid).populate({path:'chapterId',select:{name:1}});

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

      
       

       


