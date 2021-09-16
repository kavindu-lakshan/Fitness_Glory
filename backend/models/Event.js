const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    tagline : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required:true
    },

    details : {
        type : String,
        required:true
    },

    members : {
        type : String,
        required:true
    },
    crslimg : {
        type : String,
        default:"https://res.cloudinary.com/fitness-glory/image/upload/v1629876872/no-image_xblwuj.jpg" //default image which apply in the user
    },
    // likes:[
    //     {type:mongoose.Schema.Types.ObjectId,
    //     ref:'user'}
    // ],

})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;