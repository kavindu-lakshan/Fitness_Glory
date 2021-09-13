const express = require('express');
const {enroll_wprogram, get_enrolls } = require('../controllers/enrollPrograms');

const router = express.Router();

router.post('/enroll-program/save', enroll_wprogram);
router.get('/enroll-programs/', get_enrolls);

module.exports = router;