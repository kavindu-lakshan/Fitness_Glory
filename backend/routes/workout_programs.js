const express = require('express');
const { getPrograms,createPrograms,getSpecificProgram,updateProgram, deleteProgram } = require('../controllers/workoutPrograms');
const workout_programs = require('../models/workout_programs');

const router = express.Router();

//get programs
router.get('/programs', getPrograms);

//save new program
router.post('/program/save', createPrograms);

//get a specific program
router.get('/program/:id', getSpecificProgram);

//update program
router.put('/program/update/:id', updateProgram);

//delete
router.delete('/program/delete/:id', deleteProgram);

module.exports = router;