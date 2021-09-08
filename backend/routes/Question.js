const router = require("express").Router();
let Question = require("../models/Questions")
let Member = require("../models/Members")
const Questions = require("../models/Questions");

//Create Question
router.route("/member/q/createQ").post((req, res)=>{
    const mUsername = req.body.mUsername;
    const qTopic = req.body.qTopic;
    const question = req.body.question;
    const date = req.body.date;

    const nQuestion = new Question({
        mUsername,
        qTopic,
        question,
        date

    })
    nQuestion.save().then((nQuestion) =>{
        res.json(nQuestion);
    }).catch(err=>{
        res.status(500).send(err.message);
    });
});

//Display Questions Posted by User
router.route("/member/QandA/:mUsername").get((req, res) =>{
    let uName = req.params.mUsername;
    const question = Question.find({mUsername:uName}).exec().then(question =>{
        res.json(question)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Display Member Username on forms
router.route("/member/q/:mUsername").get((req, res) =>{
    let uName = req.params.mUsername;
    const question = Member.find({mUsername:uName}).exec().then(question =>{
        res.json(question)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Fetch Selected Question
router.route("/member/:id").get((req, res)=>{
    const question = Questions.findById(req.params.id, (err, question)=>{
        res.json(question)
    });
});

//Fetch Selected Question
router.route("/member/selectedQ/:id").get((req, res)=>{
    const questions = Questions.findById(req.params.id, (err, questions)=>{
        res.json(questions)
    });
});


//Update selected Question
router.route("/member/updateQ/:id").post((req, res)=>{
    Question.findById(req.params.id, (err, questions) =>{
        if(!questions){
            res.status(404).send("Question not Found!")
        }else{
            const{qTopic, question} = req.body;
            const updateQuestion = {
                qTopic,
                question
            }
            Question.findByIdAndUpdate(req.params.id, (err, updateQuestion))
            .then(()=>{
                res.status(200).send({status:"Question Details Updated"})
            }).catch(err => res.status(500).send(err.message));
        }
    });
});

//Delete Selected Question
router.route("/member/deleteQ/:id").delete((req, res) =>{
    Question.findByIdAndDelete(req.params.id, (err, questions) =>{
        if(!questions){
            res.status(404).send("Question not Found!")
        }else{
            res.status(200).send({status:"Question Deleted"});
        }
    });
});

//Display all Quesions
router.route('/member/').get((req, res) =>{
    Question.find((err, question) =>{ 
        if(err){
            console.log(err);
        }else{
            res.json(question);
        }
    });
});

module.exports = router ;