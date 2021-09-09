const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CleanerSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
        trim: false
    },
    LastName: {
        type: String,
        required: true,
        trim: false
    },
    NICNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 12,
        trim: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Shift: {
        type: String,
        trim: true,
        required: true
    },
    Gender: {
        type: String,
        trim: true,
        required: true
    },
    Mobile: {
        type: String,
        trim: true,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    Address: {
        type: String,
        required: true
    },
}, {
    timestamps: false,
});

const Cleaner = mongoose.model('Cleaner', CleanerSchema);

module.exports = Cleaner;
