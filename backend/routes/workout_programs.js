const express = require('express');
const workout_programs = require('../models/workout_programs');

const router = express.Router();

//get post
router.get('/programs', (req, res) => {
    workout_programs.find().exec((err,programs) => {
        if(err){
            return res.status(400).json({
                error: err,
                success: false
            })
        } else {
            return res.status(200).json({
                success: true,
                existingPrograms: programs
            })
        }
    })
});

module.exports = router;