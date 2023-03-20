const UserModel = require('../model/user-model');
const UserDAO = {
    register: (payload) => {
        console.log('data inside dao', payload);

        return new UserModel({
            name:payload.name,
            email:payload.email,
            password:payload.password,
            phone:payload.phone,
            userId:payload.userId
        }).save();

    },
    getAllUsers:() => {
        return UserModel.find({});
    },
    login: (payload) => {
        console.log('data inside dao', payload);
        return UserModel.findOne(payload,{password:0});

    },
    updateUser: (condition,payload) => {
        console.log('condition for update dao', condition, 'data to eb updated as ',payload);
        return UserModel.updateOne(condition,{$set:payload});

    },
    deleteUser: (condition) => {
        console.log('condition for update dao', condition, 'data to eb updated as ');
        return UserModel.deleteOne(condition);

    }
}
module.exports = UserDAO;