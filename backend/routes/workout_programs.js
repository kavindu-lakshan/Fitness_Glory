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

//save new program
router.post('/program/save', (req, res) => {
    let newProgram = workout_programs(req.body);
    newProgram.save((err) => {
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
});

//get a specific program
router.get('/program/:id', (req, res) => {
    let programId = req.params.id;

    workout_programs.findById((programId), (err, program) => {
        if(err){
            return res.status(400).json({success: false, err})
        } else {
            return res.status(200).json({
                success: true,
                program: program
            })
        }
    })
});

//update program
router.put('/program/update/:id', (req, res) => {
    workout_programs.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,program) => {
            if (err){
                return res.status(400).json({
                    error: err
                })
            } else {
                return res.status(200).json({
                    seccess: "updated successfully"
                })
            }
        }
    )
});

//delete
router.delete('/program/delete/:id', (req, res) => {
    workout_programs.findByIdAndRemove(req.params.id).exec((err,deletedProgram) => {
        if (err){
            return res.status(400).json({
                error: err
            })
        } else { 
            return res.status(200).json({
                seccess: "deleted successfully", deletedProgram
            })
        }
    })
});




module.exports = router;