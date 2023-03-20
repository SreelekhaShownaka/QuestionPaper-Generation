const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/questionPaperGen-db',()=>{
    console.log('Connected to database - questionPaperGen-db')
})

module.exports = mongoose;