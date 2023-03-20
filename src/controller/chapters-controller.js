const express = require('express');
const ChaptersService = require('../service/chapters-service');
const router = express.Router();



router.post('/createChapters',(req,res)=>{
    let bodyData = req.body;
    console.log('data inside controller', bodyData);
    ChaptersService.create(bodyData).then(result=>{
        res.send({data:'Chapters successfully created'});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.get('/getAllChapters',(req,res)=>{
    ChaptersService.getAllChapters().then(result=>{
        console.log(result)
        res.send({allChapters:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.get('/getChaptersByChapterId/:_id',(req,res)=>{
    let chId = req.params;
    ChaptersService.getChaptersByChapterId(chId).then(result=>{
        console.log(result)
        res.send({allChapters:result});
    }).catch(error=>{
        console.log(error);
        res.send({error});
    })
})

router.put('/updateChapters/:_id',(req,res)=>{
    let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside chapter controller', bodyData);
    ChaptersService.updateChapters(paramsData, bodyData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Chapters Updated successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

router.delete('/deleteChapters/:_id',(req,res)=>{
    // let bodyData = req.body;
    let paramsData = req.params;
    console.log('data inside chapter controller', paramsData);
    ChaptersService.deleteChapters(paramsData).then(result=>{
        console.log('result from service page', result);

        res.send({message:'Chapters deleted successfully',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})

module.exports = router