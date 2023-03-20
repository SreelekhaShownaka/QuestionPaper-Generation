const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('./database');


app.use('/users',require('./src/controller/user-controller'));
app.use('/subjects',require('./src/controller/subjects-controller'));
app.use('/chapters',require('./src/controller/chapters-controller'));
app.use('/questions',require('./src/controller/questions-controller'));


app.listen(4000,()=>{
    console.log('Server started on port 4000');
})


// postman - contrroler -- service -   DAO -> Model 
// data ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

