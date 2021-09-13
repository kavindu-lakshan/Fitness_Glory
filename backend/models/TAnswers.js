const mongoose = require("mongoose");

const TAnswer = mongoose.Schema({
    username:{
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

module.exports = mongoose.model('TAnswer', TAnswer);