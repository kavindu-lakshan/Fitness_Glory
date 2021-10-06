const router = require("express").Router();
const { response } = require("express");
const { interests } = require("../models/Interest");
let Interest = require("../models/Interest");

router.route("/addInterest").post(async(req,res)=>{
    const eventName = req.body.eventName;
    const memName = req.body.memName;
    const interestStatus = req.body.interestStatus;
    const weekNumber = req.body.weekNumber;

    const newInterest = new Interest({
        eventName,
        memName,
        interestStatus,
        weekNumber,
    });
    newInterest.save().then(()=>{ //if success then data will save
        res.json("Congratulations! You have Successfully Interested to this event. Reserve your time for this event :)")
    }).catch((err)=>{
        console.log(err); //error will display in the console
    });
});

//Fetch weekly Interests
router.route("/employee/:weekNumber").get((req, res) =>{
    let eventName = req.params.weekNumber;
    const interest = Interest.find({weekNumber:eventName}).exec().then(interest =>{
        res.json(interest)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

router.get('/allInterests',(req,res)=>{
    Interest.find().exec((err,interests)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            allInterests:interests
        });
    });
});
module.exports=router;