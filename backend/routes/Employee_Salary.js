const router = require('express').Router();
let Salary = require('../models/Employee_Salaries.model');

router.route('/admin/').get((req, res) => {
    Salary.find()
    .then(Salaries => res.json(Salaries))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/salary/add').post((req, res) => {
    const NICNumber = req.body.NICNumber;
    const Month = req.body.Month;
    const Year = req.body.Year;
    const SalaryID = req.body.SalaryID;
    const BasicSalary = req.body.BasicSalary;
    const OTHrs = req.body.OTHrs;
    const OTRate = req.body.OTRate;
    const OTTotal = req.body.OTTotal;
    const TotSalary = req.body.TotSalary;

    const newSalary = new Salary({
        NICNumber,
        Month,
        Year,
        SalaryID,
        BasicSalary,
        OTHrs,
        OTRate,
        OTTotal,
        TotSalary
    });

    newSalary.save()
    .then(() => res.json(newSalary))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/admin/:id').get((req, res) => {
    Salary.findById(req.params.id)
    .then(Salary => res.json(Salary))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/admin/delete/:id").delete(async (req,res)=>{
    let id=req.params.id;
    await Salary.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"Salary Deleted"});
    }).catch((errr)=>{
        res.status(500).send({status: "Error in deleting cleaner", error:err.message});
    })
})

router.route('/admin/salary/update/:id').post((req, res) => {
    Salary.findById(req.params.id)
    .then(Cleaner => {
        Salary.NICNumber = req.body.NICNumber;
        Salary.Month = req.body.Month;
        Salary.Year = req.body.Year;
        Salary.SalaryID = req.body.SalaryID;
        Salary.BasicSalary = req.body.BasicSalary;
        Salary.OTHrs = req.body.OTHrs;
        Salary.OTRate = req.body.OTRate;
        Salary.OTTotal = req.body.OTTotal;
        Salary.TotSalary = req.body.TotSalary;

        Salary.save()
        .then(() => res.json('The cleaner details have been updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
})

module.exports = router;