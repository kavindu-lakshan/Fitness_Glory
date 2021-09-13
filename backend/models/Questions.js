const mongoose = require("mongoose");

const Question = mongoose.Schema({
    email:{
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