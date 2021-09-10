const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    NICNumber:{
        type: String,
        required: true,
        unique: false,
        minlength: 10,
        maxlength: 12
    },
    Request:{
        type: String,
        required: true
    },
    LeaveDate: {
        type: Date,
        required: true
    },
    ReturnDate: {
        type: Date,
        required: true
    },
    LeaveTime: {
        type: String,
        required: true,
        trim: true
    },
    ReturnTime: {
        type: String,
        required: true,
        trim: true
    },
    Status: {
        type: String,
        required: true
    },
}, {
    timestamps: false,
});

const Leave = mongoose.model('Leave', LeaveSchema);
module.exports = Leave;