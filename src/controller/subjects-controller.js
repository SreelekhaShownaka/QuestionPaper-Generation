const express = require('express');
const SubjectsService = require('../service/subjects-service');
const router = express.Router();


router.post('/createSubjects',(req,res)=>{
    let bodyData = req.body;
    console.log('data inside controller', bodyData);
    SubjectsService.createSubjects(bodyData).then(result=>{
        res.send({data:'Subjects successfully created'});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.get('/getAllSubjects',(req,res)=>{
    SubjectsService.getAllSubjects().then(result=>{
        console.log(result)
        res.send({allSubjects:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.get('/getSubjectBySubjectId/:_id',(req,res)=>{
    let subid = req.params;
    SubjectsService.getSubjectBySubjectId(subid).then(result=>{
        console.log(result)
        res.send({allSubjects:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.put('/updateSubjects/:_id',(req,res)=>{
    let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside subject controller', bodyData);
    SubjectsService.updateSubjects(paramsData, bodyData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Subjects Updated successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})



router.delete('/deleteSubjects/:_id',(req,res)=>{
    // let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside subject controller', paramsData);
    SubjectsService.deleteSubjects(paramsData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Subjects deleted successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

module.exports = router