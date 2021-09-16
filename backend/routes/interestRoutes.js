const router = require("express").Router();
const { response } = require("express");
const { interests } = require("../models/Interest");
let Interest = require("../models/Interest");

router.route("/addInterest").post(async(req,res)=>{
    const eventName = req.body.eventName;
    const memName = req.body.memName;
    const interestStatus = req.body.interestStatus;

    const newInterest = new Interest({
        eventName,
        memName,
        interestStatus,
    })
    newInterest.save().then(()=>{ //if success then data will save
        res.json("Congratulations! You have Successfully Interested to this event. Reserve your time for this event :)")
    }).catch((err)=>{
        console.log(err); //error will display in the console
    })
})

//one interest
router.route("/addedInterest/:id").get(async (req,res)=>{
    let eventName=req.params.id;
    Event.findById((eventName), (err, event) => {
        if(err){
            return res.status(400).json({success: false, err})
        } else {
            return res.status(200).json({
                success: true,
                interest: interest
            });
        }
    });
})

// router.get('/allInterests',(req,res)=>{
//     Interest.find().exec((err,interests)=>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//             return res.status(200).json({
//                 success:true,
//                 allInterests:interests
//             });
        
//     });
// });
 router.route("/allInterests").get(async(req,res)=>{
     Interest.find().then((interests)=>{ //find will display all the details
         res.json(interests)
         
     }).catch((err)=>{
         console.log(err)
     });
 });
module.exports=router;