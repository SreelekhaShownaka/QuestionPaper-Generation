const express = require('express');
const UserService = require('../service/user-service');
const router = express.Router();

router.post('/register',(req,res)=>{
    let bodyData = req.body;
    console.log('data inside controller', bodyData);
    UserService.register(bodyData).then(result=>{
        res.send({data:'User registered successfully'});
    }).catch(error=>{
        res.send({data:error});
    })
})
router.get('/getAllUsers',(req,res)=>{
    UserService.getAllUsers().then(result=>{
        console.log(result)
        res.send({allUsers:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})
router.post('/login',(req,res)=>{
    let bodyData = req.body;
    console.log('data inside controller', bodyData);
    UserService.login(bodyData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'User loggedin successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.put('/updateUser/:email',(req,res)=>{
    let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside controller', bodyData);
    UserService.updateUser(paramsData, bodyData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'User Updated successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.delete('/deleteUser/:_id',(req,res)=>{
    // let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside controller', paramsData);
    UserService.deleteUser(paramsData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'User deleted successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})


// id - email , {age:20, name:'sree lekha'}


module.exports = router