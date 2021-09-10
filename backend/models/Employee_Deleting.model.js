const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeleteSchema = new Schema({
    NICNumber: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 12
    },
    Reason: {
        type: String,
        trim: true,
        required: true
    },
}, {
    timestamps: false,
});

const Delete = mongoose.model('Delete', DeleteSchema);
module.exports = Delete;