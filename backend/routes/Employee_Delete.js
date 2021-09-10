const router = require('express').Router();
let EmployeeDelete = require('../models/Employee_Deleting.model');
let Cleaner = require('../models/Employees_Cleaners.model');

router.route('/admin/ed/').get((req, res) => {
    EmployeeDelete.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/delete').post((req, res) => {
    const NICNumber = req.body.NICNumber;
    const Reason = req.body.Reason;

    const newDismissal = new EmployeeDelete({
        NICNumber,
        Reason
    });

    newDismissal.save()
    .then(() => res.json(newDismissal))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/admin/delete/:id").get((req, res)=>{
    const emp = Cleaner.findById(req.params.id, (err, emp)=>{
        res.json(emp)
    });
});

module.exports = router;