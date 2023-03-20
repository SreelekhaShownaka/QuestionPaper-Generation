const ChaptersModel = require('../model/chapters-model');
const ChaptersDAO = {
    create: (payload) => {
        console.log('data inside dao', payload);

        return new ChaptersModel({
            name:payload.name,
            subjectId:payload.subjectId
                }).save();

    },
    

    getAllChapters:() => {
        return ChaptersModel.find({}).populate({path:'subjectId',select:{name:1}});
    }, 

    getChaptersByChapterId:(chId) => {
        return ChaptersModel.find(chId).populate({path:'subjectId',select:{name:1}});
    }, 

    updateChapters: (condition,payload) => {
        console.log('condition for update dao', condition, 'data to be updated as ',payload);
        return ChaptersModel.updateOne(condition,{$set:payload});

    },
    deleteChapters: (condition) => {
        console.log('condition for update dao', condition, 'data to be updated as ');
        return ChaptersModel.deleteOne(condition);

    }
}
module.exports = ChaptersDAO;

//{_id:chId}