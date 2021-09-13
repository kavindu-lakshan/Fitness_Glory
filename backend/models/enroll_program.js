const mongoose = require('mongoose');

const enrollProgramSchema = new mongoose.Schema({
    programName: {
        type: String, required: true
    },
    member_id: {
        type: String, required: true
    }, 
    enroll_datetime: {
        type: String, required: true
    },
    activeness: {
        type: Boolean, required: true
    }
});
 
module.exports = mongoose.model('enroll_programs', enrollProgramSchema);