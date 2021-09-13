const mongoose = require("mongoose");
const enroll_program = require('../models/enroll_program');

const enroll_wprogram = (req, res) => {
    let newEnroll = enroll_program(req.body);
    newEnroll.save((err) => {
        if(err){
            return res.status(400).json({
                error: err,
                success: false
            });
        } else {
            return res.status(200).json({
                success: true
            })
        }
    });
}

const get_enrolls = (req, res) => {
    enroll_program.find().exec((err,enrolls) => {
        if(err){
            return res.status(400).json({
                error: err,
                success: false
            })
        } else {
            return res.status(200).json({
                success: true,
                enrolls: enrolls
            })
        }
    })
}

module.exports = {enroll_wprogram, get_enrolls};