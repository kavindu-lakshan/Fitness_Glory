const router = require("express").Router();
const { response } = require("express");
const { events } = require("../models/Event");
let Event = require("../models/Event");
const { protect } =require( "../middlewares/authMiddleware.js");
//http://localhost:5000/event/add

router.route("/addEvent").post(async(req,res)=>{
    const tagline = req.body.tagline;
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const details = req.body.details;
    const members = req.body.members;
    const crslimg = req.body.crslimg;

    const newEvent = new Event({
        tagline,
        title,
        description,
        date,
        details,
        members,
        crslimg
    })
    newEvent.save().then(()=>{ //if success then data will save
        res.json("Event Added")
    }).catch((err)=>{
        console.log(err); //error will display in the console
    })
})





//get event all details
//http://localhost:5000/event

router.get('/allevents',(req,res)=>{
    Event.find().exec((err,events)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
            return res.status(200).json({
                success:true,
                allEvents:events
            });
        
    });
});

//  router.route("/allevents").get(async(req,res)=>{
//      Event.find().then((events)=>{ //find will display all the details
//          res.json(events)
         
//      }).catch((err)=>{
//          console.log(err)
//      });
//  });

//update
router.route("/updateEvent/:id").put(async (req,res)=>{ 
    let eventId=req.params.id; //fetch update user id from this
    const{tagline,title, description, date,details,members,crslimg}=req.body;

    const updateEvent = {
        tagline,
        title,
        description,
        date,
        details,
        members,
        crslimg
    }

    const update = await Event.findByIdAndUpdate(eventId, updateEvent).then(()=>{
        res.status(200).send({status:"Event Updated"})
        res.json("Event Update Successful")
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating event", error:err.message});
    })
})

router.route("/deleteEvent/:id").delete(async (req,res)=>{
    let eventId=req.params.id;

    await Event.findByIdAndDelete(eventId).then(()=>{
        res.status(200).send({status:"Event Deleted"});
    }).catch((errr)=>{
        res.status(500).send({status: "Error with deleted event", error:err.message});
    })
})


//get one event details
router.route("/eventdetails/:id").get(async (req,res)=>{
    let eventTagline=req.params.id;
    Event.findById((eventTagline), (err, event) => {
        if(err){
            return res.status(400).json({success: false, err})
        } else {
            return res.status(200).json({
                success: true,
                event: event
            });
        }
    });
})

// router.get('/eventdetails/:id', getSpecificProgram);
// const getSpecificProgram = (req, res) => {
//     let eventID = req.params.id;

//     Event.findById((eventID), (err, event) => {
//         if(err){
//             return res.status(400).json({success: false, err})
//         } else {
//             return res.status(200).json({
//                 success: true,
//                 event: event
//             })
//         }
//     })
// }
// router.put('/like/:id', protect,async(req,res)=>{
//     try {
//         const event = await Event.findById(req.params.id);
//         //check if the event has already liked
//         if(event.likes.filter(like=>like.user.toString()===req.user.id).length>0){
//          return res.json(400).json({msg:'Event Already Liked!'});   
//         }
//         event.likes.unshift({user:req.user.id});
//         await event.save();
//         res.json(event.likes);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// })

// router.put('/like/:id',protect,(req,res)=>{
//     Event.findByIdAndUpdate(req.body.eventId,{
//         $push:{likes:req.user._id}
//     },{
//         new:true
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     })
// })
// router.put('/unlike/:id',protect,(req,res)=>{
//     Event.findByIdAndUpdate(req.body.eventId,{
//         $pull:{likes:req.user._id}
//     },{
//         new:true
//     }).exec((err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }else{
//             res.json(result)
//         }
//     })
// })



module.exports=router;