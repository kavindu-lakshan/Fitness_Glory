const router = require('express').Router();
let Cleaner = require('../models/Employees_Cleaners.model');

router.route('/').get((req, res) => {
    Cleaner.find()
    .then(Cleaners => res.json(Cleaners))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cleaner/add').post((req, res) => {
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const NICNumber = req.body.NICNumber;
    const DOB = Date.parse(req.body.DOB);
    const Shift = req.body.Shift;
    const Gender = req.body.Gender;
    const Mobile = req.body.Mobile;
    const Address = req.body.Address;

    const newCleaner = new Cleaner({
        FirstName,
        LastName,
        NICNumber,
        DOB,
        Shift,
        Gender,
        Mobile,
        Address
    });

    newCleaner.save()
    .then(() => res.json(newCleaner))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Cleaner.findById(req.params.id)
    .then(Cleaner => res.json(Cleaner))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/delete/:id").delete(async (req,res)=>{
    let id=req.params.id;
    await Cleaner.findByIdAndDelete(id).then(()=>{
        res.status(200).send({status:"Cleaner Deleted"});
    }).catch((errr)=>{
        res.status(500).send({status: "Error in deleting cleaner", error:err.message});
    })
})

router.route('/admin/update/:id').post((req, res) => {
    Cleaner.findById(req.params.id)
    .then(Cleaner => {
        Cleaner.FirstName = req.body.FirstName;
        Cleaner.LastName = req.body.LastName;
        Cleaner.NICNumber = req.body.NICNumber;
        Cleaner.DOB = Date.parse(req.body.DOB);
        Cleaner.Shift = req.body.Shift;
        Cleaner.Gender = req.body.Gender;
        Cleaner.Mobile = req.body.Mobile;
        Cleaner.Address = req.body.Address;

        Cleaner.save()
        .then(() => res.json('The cleaner details have been updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    });
})

module.exports = router;