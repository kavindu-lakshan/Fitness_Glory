const mongoose = require("mongoose");

const Answer = mongoose.Schema({
    email:{
        type:String
    },
    
    QID:{
        type:String
    },

    qTopic:{
        type:String
    },

    question:{
        type:String
    },
    answer:{
        type:String
    },
})

module.exports = mongoose.model('Answer', Answer);