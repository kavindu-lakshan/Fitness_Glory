//-------------------------------------------------------------QAndA Section BEGIN--------------------------------------------------------------------------------
//Display all the questions related to the user.
export const getQuestions = (email) => fetch(`http://localhost:5000/qu/member/QandA/${email}`).then(res=>res.clone().json());

//Display the Username of the client in the create form
export const getQuestion = (email) => fetch(`http://localhost:5000/qu/member/createQ/${email}`).then(res=>res.clone().json());

//Display selected question details
export const selectQuestion = (id) => fetch(`http://localhost:5000/qu/member/${id}`).then(res => res.clone().json());

//Create question
export const createQuestion = (question) => fetch("http://localhost:5000/qu/member/q/createQ/",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(question)
});

//Updates the question details
export const updateQuestion =  (questions, id)=> fetch(`http://localhost:5000/qu/member/updateQ/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(questions)
});

//Update question Status
export const updateQStatus =  (questions, id)=> fetch(`http://localhost:5000/qu/member/a/createA/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(questions)
});

//Deletes selected Question
export const deleteQuestion = (question, id) => fetch(`http://localhost:5000/qu/member/deleteQ/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(question)
});

//Display all questions Member
export const allQuestionsM =() =>fetch("http://localhost:5000/qu/member/").then(res => res.clone().json());

//Display selected question details
export const selectQuestionDetails = (id) => fetch(`http://localhost:5000/qu/member/selectedQ/${id}`).then(res => res.clone().json());

//Display question details in answer form
export const selectQuestionDetailsA = (id) => fetch(`http://localhost:5000/an/member/a/${id}`).then(res => res.clone().json());

//Create answer Member
export const createAnswer = (answer) => fetch("http://localhost:5000/an/member/a/createA",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Display all the answers related to the user.
export const getAnswer = (email) => fetch(`http://localhost:5000/an/member/answer/${email}`).then(res=>res.clone().json());

//Display all answers
export const allAnswers =() =>fetch("http://localhost:5000/an/member/").then(res => res.clone().json());

//Display Member answer details 
export const getAnswers = (id) => fetch(`http://localhost:5000/an/member/as/${id}`).then(res => res.clone().json());

//Updates the answer details
export const updateAnswer =  (answer, id)=> fetch(`http://localhost:5000/an/member/as/updateA/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Deletes selected answer
export const deleteAnswer = (answer, id) => fetch(`http://localhost:5000/an/member/as/deleteA/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//--------------------------------------------------------Trainer QandA------------------------------------------------------

//Display all questions Traner
export const allQuestionsT =() =>fetch("http://localhost:5000/qu/employee/").then(res => res.clone().json());

//Display unanswered Questions
export const unansweredT = (weekNo) =>fetch(`http://localhost:5000/qu/employee/unasnweredQ/${weekNo}`).then(res => res.clone().json());

//Create answer Trainer
export const createAnswerT = (answer) => fetch("http://localhost:5000/an/employee/a/createA",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Display all the answers related to the Trainer.
export const getAnswerT = (username) => fetch(`http://localhost:5000/an/employee/answer/${username}`).then(res=>res.clone().json());

//Display Trainer answer details 
export const getAnswersT = (id) => fetch(`http://localhost:5000/an/employee/as/${id}`).then(res => res.clone().json());

//Updates the Trainer answer details
export const updateAnswerT =  (answer, id)=> fetch(`http://localhost:5000/an/employee/as/updateA/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Deletes selected Trainer answer
export const deleteAnswerT = (answer, id) => fetch(`http://localhost:5000/an/employee/as/deleteA/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//-------------------------------------------------------------QAndASection END-------------------------------------------------------------------------------------


//-------------------------------------------------------------Feedback Section BEGIN-------------------------------------------------------------------------------

//Displays all feedback relating to the client email
export const getFeedback =(email) => fetch(`http://localhost:5000/fb/member/feedback/${email}`).then(res => res.clone().json());

//Displays selected feedback detailss
export const selectFeedback = (id) => fetch(`http://localhost:5000/fb/member/${id}`).then(res => res.clone().json());

//Displays selected trainer details in the CreateFeedback Form
export const getUsername = (username) =>fetch(`http://localhost:5000/fb/member/td/${username}`).then(res => res.clone().json());

//Updates the selected feedback details
export const updateFeedback = (feedback, id) => fetch(`http://localhost:5000/fb/member/updateF/${id}`,{
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(feedback)
});

//Deletes the selected feedback details
export const deleteFeedback = (feedback, id) => fetch(`http://localhost:5000/fb/member/deleteF/${id}`,{
    method: "DELETE",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(feedback)
});

//Displays all the trainers that are registered
export const getTrainers =() =>fetch("http://localhost:5000/tr/").then(res => res.clone().json());

//Displays the selected trainer details
export const getTrainer = (username) =>fetch(`http://localhost:5000/tr/trainer/${username}`).then(res => res.clone().json());

//Create feedback
export const createFeedback = (feedback) => fetch("http://localhost:5000/fb/member/createF/",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(feedback)
});

//Displays the selected trainer details
export const getTUsername = (id) =>fetch(`http://localhost:5000/tr/member/trainer/createF/${id}`).then(res => res.clone().json());

//------------------------------------------------------------Trainer Feedback-------------------------------------------------------
//Displays all feedback relating to the client username
export const getFeedbackT =(username) => fetch(`http://localhost:5000/fb/employee/feedback/${username}`).then(res => res.clone().json());

//Displays selected Trainer feedback details
export const selectFeedbackT = (id) => fetch(`http://localhost:5000/fb/employee/viewF/${id}`).then(res => res.clone().json());

//------------------------------------------------------Feedback Section END---------------------------------------------------------------------------------
