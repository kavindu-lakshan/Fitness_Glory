const router = require("express").Router();
const Answers = require("../models/Answers");
let Answer = require("../models/Answers")
let Questions = require("../models/Questions")

//Create Answer
router.route("/a/createA").post((req, res)=>{
    const mUsername = req.body.mUsername;
    const QID = req.body.QID;
    const qTopic = req.body.qTopic;
    const answer = req.body.answer;

    const nAnswer = new Answer({
        mUsername,
        QID,
        qTopic,
        answer

    })
    nAnswer.save().then((nAnswer) =>{
        res.json(nAnswer);
    }).catch(err=>{
        res.status(500).send(err.message);
    });
});

//Fetch Selected Question
router.route("/a/:id").get((req, res)=>{
    const questions = Questions.findById(req.params.id, (err, questions)=>{
        res.json(questions)
    });
});

//Display Answer Posted by User
router.route("/answer/:mUsername").get((req, res) =>{
    let uName = req.params.mUsername;
    const answer = Answer.find({mUsername:uName}).exec().then(answer =>{
        res.json(answer)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Display Answer details
router.route("/as/:id").get((req, res)=>{
    const answer = Answer.findById(req.params.id, (err, answer)=>{
        res.json(answer)
    });
});

//Update selected Answer
router.route("/as/updateA/:id").post((req, res)=>{
    Answers.findById(req.params.id, (err, answer) =>{
        if(!answer){
            res.status(404).send("Answer not Found!")
        }else{
            const{mUsername, QID, qTopic, answer} = req.body;
            const updateAnswer = {
                mUsername,
                QID,
                qTopic,
                answer
            }
            Answer.findByIdAndUpdate(req.params.id, (err, updateAnswer))
            .then(()=>{
                res.status(200).send({status:"Answer Details Updated"})
            }).catch(err => res.status(500).send(err.message));
        }
    });
});

//Delete Selected Answer
router.route("/as/deleteA/:id").delete((req, res) =>{
    Answer.findByIdAndDelete(req.params.id, (err, answers) =>{
        if(!answers){
            res.status(404).send("Answer not Found!")
        }else{
            res.status(200).send({status:"Answer Deleted"});
        }
    });
});

module.exports = router;