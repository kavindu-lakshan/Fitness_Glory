const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    NICNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 12,
        trim: true
    },
    Month: {
        type: String,
        trim: true,
        required: true
    },
    Year: {
        type: String,
        trim: true,
        required: true
    },
    SalaryID: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    BasicSalary: {
        type: String,
        required: true
    },
    OTHrs: {
        type: String,
        required: true
    },
    OTRate: {
        type: String,
        required: true
    },
    OTTotal: {
        type: String,
        required: true
    },
    TotSalary: {
        type: String,
        required: true
    }
}, {
    timestamps: false,
});

const Salary = mongoose.model('Salary', SalarySchema);

module.exports = Salary;
