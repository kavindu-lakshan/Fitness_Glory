const router = require("express").Router();
let Question = require("../models/Questions")
let User = require("../models/userModel")
const Questions = require("../models/Questions");

//Create Question
router.route("/member/q/createQ").post((req, res)=>{
    const email = req.body.email;
    const qTopic = req.body.qTopic;
    const question = req.body.question;
    const date = req.body.date;
    const status = req.body.status;
    const weekNo = req.body.weekNo;

    const nQuestion = new Question({
        email,
        qTopic,
        question,
        date,
        status,
        weekNo

    })
    nQuestion.save().then((nQuestion) =>{
        res.json(nQuestion);
    }).catch(err=>{
        res.status(500).send(err.message);
    });
});

//Display Questions Posted by User
router.route("/member/QandA/:email").get((req, res) =>{
    let uName = req.params.email;
    const question = Question.find({email:uName}).exec().then(question =>{
        res.json(question)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
    });
});

//Display Member Username on forms
router.route("/member/createQ/:email").get((req, res) =>{
    let uName = req.params.email;
    const question = User.findOne({email:uName}).exec().then(question =>{
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

//Fetch Unanswered Questions
router.route("/employee/unasnweredQ/:weekNo").get((req, res) =>{
    let uName = req.params.weekNo;
    const question = Question.find({weekNo:uName}).exec().then(question =>{
        res.json(question)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});
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

//Display all Questions Member
router.route('/member/').get((req, res) =>{
    Question.find((err, question) =>{ 
        if(err){
            console.log(err);
        }else{
            res.json(question);
        }
    });
});

//Update status of question
router.route("/member/a/createA/:id").post((req, res)=>{
    Question.findById(req.params.id, (err, questions) =>{
        if(!questions){
            res.status(404).send("Question not Found!")
        }else{
            const{status} = req.body;
            const updateQuestion = {
                status
            }
            Question.findByIdAndUpdate(req.params.id, (err, updateQuestion))
            .then(()=>{
                res.status(200).send({status:"Question Details Updated"})
            }).catch(err => res.status(500).send(err.message));
        }
    });
});

//Display all Questions Trainer
router.route('/employee/').get((req, res) =>{
    Question.find((err, question) =>{ 
        if(err){
            console.log(err);
        }else{
            res.json(question);
        }
    });
});


module.exports = router ;