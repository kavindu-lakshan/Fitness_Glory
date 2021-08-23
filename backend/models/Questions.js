const mongoose = require("mongoose");

const Question = mongoose.Schema({
    mUsername:{
        type:String
    },
    qTopic:{
        type:String
    },
    question:{
        type:String
    },
    date:{
        type:String,
    }
})

module.exports = mongoose.model('Question', Question);