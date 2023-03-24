const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
require('./database');


app.use('/users',require('./src/controller/user-controller'));
app.use('/subjects',require('./src/controller/subjects-controller'));
app.use('/chapters',require('./src/controller/chapters-controller'));
app.use('/questions',require('./src/controller/questions-controller'));
app.use('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/register.html');
})

app.use('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html');
})
app.use('/ECSubject',(req,res)=>{
    res.sendFile(__dirname+'/public/ECSubject.html');
})
app.use('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(4000,()=>{
    console.log('Server started on port 4000');
})


// postman - contrroler -- service -   DAO -> Model 
// data ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

