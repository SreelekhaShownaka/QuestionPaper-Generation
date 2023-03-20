const QuestionsDAO=require('../DAO/questions-dao');

const QuestionsService={

    register: (payload) => {
    console.log('data inside service page',payload);

    return new Promise((resolve,reject)=>{
        QuestionsDAO.register(payload).then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
    },

    create: (payload) => {
    console.log('data inside service',payload);

    return new Promise((resolve,reject) =>{
        QuestionsDAO.login(payload).then(result => {
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








