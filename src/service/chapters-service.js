const ChaptersDAO = require('../DAO/chapters-dao');

const ChaptersService = {
    
    create: (payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            ChaptersDAO.create(payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    updateChapters: (condition, payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            ChaptersDAO.updateChapters(condition,payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getAllChapters:() => {
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            ChaptersDAO.getAllChapters().then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },

    getChaptersByChapterId:(chId)=>{
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            ChaptersDAO.getChaptersByChapterId(chId).then(result => {
                resolve(result);
                console.log("result from data base in service page",result)
            }).catch(error => {
                reject(error);
            })
        })
    },

    deleteChapters: (condition) => {
        console.log('data inside service', condition);

        return new Promise((resolve, reject) => {
            ChaptersDAO.deleteChapters(condition).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

}

module.exports = ChaptersService;