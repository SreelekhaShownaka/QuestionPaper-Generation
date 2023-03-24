const express=require('express');
const QuestionsService=require('../service/questions-service');
const router=express.Router();

router.post('/createQuestions',(req,res) => {
    let bodyData=req.body;
    console.log('data inside controller',bodyData);
    QuestionsService.createQuestions(bodyData).then(result=> {
        res.send({data:'Questions successfully created'});
    }).catch(error=>{
        res.send({data:error});
    })
})


router.get('/getQuestionsByQuestionsId/:_id',(req,res)=>{
    let qnid = req.params;
    QuestionsService.getQuestionsByQuestionsId(qnid).then(result=>{
        console.log(result)
        res.send({allQuestions:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.get('/getAllQuestions',(req,res)=>{
    QuestionsService.getAllQuestions().then(result=>{
        console.log(result)
        res.send({allQuestions:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.put('/updateQuestions/:_id',(req,res)=>{
    let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside questions controller', bodyData);
    QuestionsService.updateQuestions(paramsData, bodyData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Questions Updated successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.delete('/deleteQuestions/:_id',(req,res)=>{
    let paramsData = req.params;
    console.log('data inside questions controller', paramsData);
    QuestionsService.deleteQuestions(paramsData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Questions deleted successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

module.exports = router