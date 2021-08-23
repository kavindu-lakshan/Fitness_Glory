const mongoose = require("mongoose");

const Member = mongoose.Schema({
    mID:{
        type:String
    },
    mUsername:{
        type:String
    }
})

module.exports = mongoose.model('Member', Member);