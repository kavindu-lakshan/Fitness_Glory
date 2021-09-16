const mongoose = require("mongoose");

const prepostSchema = mongoose.Schema({
    creator:String,
    name:String,
    goal:String,
    type:String,
    level:String,
    noWeeks:String,
    equipment:String,
    sups:String,
    tags:[String],
    selectedFile:String,
    likeCount: {
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
});

var PrePostMessage = mongoose.model('PrePostMessage', prepostSchema);

module.exports = PrePostMessage;