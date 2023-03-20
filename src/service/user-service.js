const UserDAO = require('../DAO/user-dao');

const UserService = {
    register: (payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            UserDAO.register(payload).then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    getAllUsers:() => {
        return new Promise((resolve, reject) => {
            console.log("checking inside service");
            UserDAO.getAllUsers().then(result => {
                resolve(result);
                console.log("service @20",result)
            }).catch(error => {
                reject(error);
            })
        })
    },
    login: (payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            UserDAO.login(payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    updateUser: (paramsData, payload) => {
        console.log('data inside service', payload);

        return new Promise((resolve, reject) => {
            UserDAO.updateUser(paramsData,payload).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },
    deleteUser: (condition) => {
        console.log('data inside service', condition);

        return new Promise((resolve, reject) => {
            UserDAO.deleteUser(condition).then(result => {
                console.log('result from data base in service page', result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

}

module.exports = UserService;