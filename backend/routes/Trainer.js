const router = require("express").Router()

let Trainer = require("../models/trainerModel")

//Display Trainers 
router.route('/').get((req, res) =>{
    Trainer.find((err, trainers) =>{
        if(err){
            console.log(err);
        }else{
            res.json(trainers);
        }
    });
});

//Display Trainer Details for the create feedback form
router.route("/trainer/:username").get((req, res) => {
    let uName = req.params.username;
    const trainer = Trainer.find({username:uName}).exec().then(trainer =>{
        res.json(trainer)
    }) 
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});;

//Fetch Selected Feedback
router.route("/member/trainer/createF/:id").get((req, res) => {
    const trainer = Trainer.findById(req.params.id, (err, trainer) =>{
       res.json(trainer)
    })
}) 


module.exports = router;