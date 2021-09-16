const router = require('express').Router();
let Salary = require('../models/Employee_Salaries.model');

router.route('/admin/salary').get((req, res) => {
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

router.route("/admin/delete/:id").delete(async (req,res)=>{
    let id=req.params.id;
    await Salary.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"Salary Deleted"});
    }).catch((errr)=>{
        res.status(500).send({status: "Error in deleting cleaner", error:err.message});
    })
})


module.exports = router;