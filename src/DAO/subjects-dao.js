const SubjectsModel = require('../model/subjects-model');
const SubjectsDAO = {
    
    createSubjects: (payload) => {
        console.log('data inside dao', payload);

        return new SubjectsModel({
            name:payload.name,
            class:payload.class,
            school:payload.school
        }).save();

    },

    getAllSubjects:() => {
        return SubjectsModel.find({});
    },    
    getSubjectBySubjectId:(subid) => {
        return SubjectsModel.findOne({_id:subid});
    },    
    updateSubjects: (condition,payload) => {
        console.log('condition for update dao', condition, 'data to be updated as ',payload);
        return SubjectsModel.updateOne(condition,{$set:payload});

        

    },
    deleteSubjects: (condition) => {
        console.log('condition for update dao', condition, 'data to be updated as ');
        return SubjectsModel.deleteOne(condition);

    }
}
module.exports = SubjectsDAO;