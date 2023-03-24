const QuestionsDAO=require('../DAO/questions-dao');

const QuestionsService={
    
    createQuestions: (payload) => {
    console.log('data inside service',payload);

    return new Promise((resolve,reject) =>{
        QuestionsDAO.createQuestions(payload).then(result => {
            console.log('result from data base in service page',result);
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
    },

    updateQuestions: (condition, payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            QuestionsDAO.updateQuestions(condition,payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getAllQuestions:() => {
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            QuestionsDAO.getAllQuestions().then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },

    getQuestionsByQuestionsId:(qnid)=>{
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            QuestionsDAO.getQuestionsByQuestionsId(qnid).then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },

    deleteQuestions: (condition) => {
        console.log('data inside service', condition);

        return new Promise((resolve, reject) => {
            QuestionsDAO.deleteQuestions(condition).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

}

module.exports = QuestionsService;








