const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({

    eventName : {
        type : String,
        required : true
    },

    memName : {
        type : String,
        unique:true,
        required : true,
        
    },

    interestStatus : {
        type : String,
        required : true
    },

    weekNumber : {
        type : String,
    }

},
    {
        timestamps: true,
    }
);

const Interest = mongoose.model("Interest", interestSchema);

module.exports = Interest;