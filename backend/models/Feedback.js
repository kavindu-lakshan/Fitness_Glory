const mongoose = require("mongoose");

const Feedback = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    topic:{
        type:String
    },
    feedback:{
        type:String
    },
    ratings:{
        type:String
    }
})

module.exports = mongoose.model('Feedback', Feedback);