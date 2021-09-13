const router = require("express").Router();
const Answers = require("../models/Answers");
const TAnswer = require("../models/TAnswers");
let Answer = require("../models/Answers")
let Questions = require("../models/Questions")

//Create Answer Member
router.route("/member/a/createA").post((req, res)=>{
    const email = req.body.email;
    const QID = req.body.QID;
    const qTopic = req.body.qTopic;
    const question = req.body.question;
    const answer = req.body.answer;

    const nAnswer = new Answer({
        email,
        QID,
        qTopic,
        question,
        answer

    })
    nAnswer.save().then((nAnswer) =>{
        res.json(nAnswer);
    }).catch(err=>{
        res.status(500).send(err.message);
    });
});

//Fetch Selected Question
router.route("/member/a/:id").get((req, res)=>{
    const questions = Questions.findById(req.params.id, (err, questions)=>{
        res.json(questions)
    });
});

//Display Answer Posted by User
router.route("/member/answer/:email").get((req, res) =>{
    let uName = req.params.email;
    const answer = Answer.find({email:uName}).exec().then(answer =>{
        res.json(answer)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Display Answer details
router.route("/member/as/:id").get((req, res)=>{
    const answer = Answer.findById(req.params.id, (err, answer)=>{
        res.json(answer)
    });
});

//Update selected Answer
router.route("/member/as/updateA/:id").post((req, res)=>{
    Answers.findById(req.params.id, (err, answer) =>{
        if(!answer){
            res.status(404).send("Answer not Found!")
        }else{
            const{email, QID, qTopic, answer} = req.body;
            const updateAnswer = {
                email,
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
router.route("/member/as/deleteA/:id").delete((req, res) =>{
    Answer.findByIdAndDelete(req.params.id, (err, answers) =>{
        if(!answers){
            res.status(404).send("Answer not Found!")
        }else{
            res.status(200).send({status:"Answer Deleted"});
        }
    });
});

//-------------------------------------Trainer QAndA-------------------------------------------

//Create Answer Trainer
router.route("/employee/a/createA").post((req, res)=>{
    const username = req.body.username;
    const QID = req.body.QID;
    const qTopic = req.body.qTopic;
    const question = req.body.question;
    const answer = req.body.answer;

    const nTAnswer = new TAnswer({
        username,
        QID,
        qTopic,
        question,
        answer

    })
    nTAnswer.save().then((nTAnswer) =>{
        res.json(nTAnswer);
    }).catch(err=>{
        res.status(500).send(err.message);
    });
});


//Display Answer Posted by Trainer
router.route("/employee/answer/:username").get((req, res) =>{
    let uName = req.params.username;
    const answer = TAnswer.find({username:uName}).exec().then(answer =>{
        res.json(answer)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Display Trainer Answer details
router.route("/employee/as/:id").get((req, res)=>{
    const answer = TAnswer.findById(req.params.id, (err, answer)=>{
        res.json(answer)
    });
});

//Update selected Trainer Answer 
router.route("/employee/as/updateA/:id").post((req, res)=>{
    TAnswer.findById(req.params.id, (err, answer) =>{
        if(!answer){
            res.status(404).send("Answer not Found!")
        }else{
            const{username, QID, qTopic, answer} = req.body;
            const updateAnswer = {
                username,
                QID,
                qTopic,
                answer
            }
            TAnswer.findByIdAndUpdate(req.params.id, (err, updateAnswer))
            .then(()=>{
                res.status(200).send({status:"Answer Details Updated"})
            }).catch(err => res.status(500).send(err.message));
        }
    });
});

//Delete Selected Trainer Answer
router.route("/employee/as/deleteA/:id").delete((req, res) =>{
    TAnswer.findByIdAndDelete(req.params.id, (err, answers) =>{
        if(!answers){
            res.status(404).send("Answer not Found!")
        }else{
            res.status(200).send({status:"Answer Deleted"});
        }
    });
});
module.exports = router;