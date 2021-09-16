const router = require("express").Router();
let Feedback = require("../models/Feedback")
let Trainer = require("../models/trainerModel")


//Create Feedback
router.route("/member/createF").post((req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const topic = req.body.topic;
    const feedback = req.body.feedback;
    const ratings = req.body.ratings;

    const nFeedback = new Feedback({
        username,
        email, 
        topic, 
        feedback,
        ratings
    })
    nFeedback.save().then((nFeedback) =>{
        res.json(nFeedback)
    }).catch(err =>{
        res.status(500).send(err.message);
    });
});

//Fetch Selected Feedback
router.route("/member/:id").get((req, res) => {
    const feedback = Feedback.findById(req.params.id, (err, feedback) =>{
        res.json(feedback)
    })
}) 

//Display Feedback Relavant To User
router.route("/member/feedback/:email").get((req, res) => {
    let uName = req.params.email;
    const feedback = Feedback.find({email:uName}).exec().then(feedback =>{
        res.json(feedback)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Update Selected Feedback
router.route("/member/updateF/:id").post((req, res) =>{
    Feedback.findById(req.params.id, (err, feedback) =>{
        if(!feedback){
            res.status(404). send("Feedback not Found!")
        }else{
            const{cUsername, topic, feedback, ratings} = req.body;
            const updateFeedback ={
                cUsername, 
                topic,
                feedback,
                ratings
            }
            Feedback.findByIdAndUpdate(req.params.id, (err, updateFeedback))
            .then(() =>{
                res.status(200).send({status:"Feedback Updated"})
            }).catch(err => res.status(500).send(err.message));
        }
    }); 
});

//Delete Selected Feedback
router.route("/member/deleteF/:id").delete((req, res) =>{
    Feedback.findByIdAndDelete(req.params.id, (err, feedback) =>{
        if(!feedback){
            res.status(404).send("Feedback not Found!") 
        }else{
            res.status(200).send({status: "Feedback Deleted"});
        }
    });
});

//Display selected trainer
router.route("/member/td/:username").get((req, res) => {
    let uName = req.params.username;
    const trainer = Trainer.find({username:uName}).exec().then(trainer =>{
        res.json(trainer)
    }) 
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});
//------------------------------------------Trainer Feedback-----------------------------------------
//Display Feedback Relavant To Employee
router.route("/employee/feedback/:username").get((req, res) => {
    let uName = req.params.username;
    const feedback = Feedback.find({username:uName}).exec().then(feedback =>{
        res.json(feedback)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Fetch Selected Trainer Feedback
router.route("/employee/viewF/:id").get((req, res) => {
    const feedback = Feedback.findById(req.params.id, (err, feedback) =>{
        res.json(feedback)
    })
}) 


module.exports = router;