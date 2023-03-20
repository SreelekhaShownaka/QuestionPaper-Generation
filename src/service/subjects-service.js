const SubjectsDAO = require('../DAO/subjects-dao');

const SubjectsService = {
    register: (payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            SubjectsDAO.register(payload).then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    createSubjects: (payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            SubjectsDAO.createSubjects(payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getAllSubjects:() => {
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            SubjectsDAO.getAllSubjects().then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },
    getSubjectBySubjectId:(subid)=>{
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            SubjectsDAO.getSubjectBySubjectId(subid).then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },
    updateSubjects: (condition, payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            SubjectsDAO.updateSubjects(condition,payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    deleteSubjects: (condition) => {
        console.log('data inside service', condition);

        return new Promise((resolve, reject) => {
            SubjectsDAO.deleteSubjects(condition).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

}

module.exports = SubjectsService;