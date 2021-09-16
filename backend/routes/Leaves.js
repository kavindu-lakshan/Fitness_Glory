const router = require('express').Router();
let Leave = require('../models/Trainer_Leave_Request.model');

router.route('/').get((req, res) => {
    Leave.find()
    .then(leaves => res.json(leaves))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/employee/leaves/add').post((req, res) => {
    const NICNumber = req.body.NICNumber;
    const Request = req.body.Request;
    const LeaveDate = Date.parse(req.body.LeaveDate);
    const ReturnDate = Date.parse(req.body.ReturnDate);
    const LeaveTime = req.body.LeaveTime;
    const ReturnTime = req.body.ReturnTime;
    const Status = req.body.Status;
    
    const newLeave = new Leave({
        NICNumber,
        Request,
        LeaveDate,
        ReturnDate,
        LeaveTime,
        ReturnTime,
        Status
    });

    newLeave.save()
    .then(() => res.json(newLeave))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Leave.findById(req.params.id)
    .then(Leave => res.json(Leave))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/leave/:Status").get((req, res)=>{
    let id = req.params.Status;
    const statuss = Leave.find({Status:id}).exec().then(statuss =>{
        res.json(statuss)
    })
    .catch(err=>{
        res.status(500).json({error:err});
    });
});

router.route('/admin/updateL/:id').post((req, res) => {
    Leave.findById(req.params.id)
    .then(Leave => {
        Leave.Status = req.body.Status;
    
        Leave.save()
        .then(() => res.json('The leave details have been updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
})

module.exports = router;