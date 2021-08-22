//Display all the questions related to the user.
export const getQuestions = (mUsername) => fetch(`http://localhost:5000/qu/QandA/${mUsername}`).then(res=>res.clone().json());

//Display the Username of the client in the create form
export const getQuestion = (mUsername) => fetch(`http://localhost:5000/qu/q/${mUsername}`).then(res=>res.clone().json());

//Display selected question details
export const selectQuestion = (id) => fetch(`http://localhost:5000/qu/${id}`).then(res => res.clone().json());

//Display Member Username
export const selectMUsername = (mUsername) => fetch(`http://localhost:5000/qu/q/${mUsername}`).then(res => res.clone().json());

//Updates the question details
export const updateQuestion =  (questions, id)=> fetch(`http://localhost:5000/qu/updateQ/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(questions)
});

//Deletes selected Question
export const deleteQuestion = (question, id) => fetch(`http://localhost:5000/qu/deleteQ/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(question)
});

//Create Question
export const createQuestion = (question) => fetch("http://localhost:5000/qu/q/createQ",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(question)
})

//Display all questions
export const allQuestions =() =>fetch("http://localhost:5000/qu/").then(res => res.clone().json());

//Display Qdetails
export const selectQuestionDetails = (id) => fetch(`http://localhost:5000/qu/selectedQ/${id}`).then(res => res.clone().json());

//Display Qdetails
export const selectQuestionDetailsA = (id) => fetch(`http://localhost:5000/an/a/${id}`).then(res => res.clone().json());


//Create Answer
export const createAnswer = (answer) => fetch("http://localhost:5000/an/a/createA",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
})

//Display all the questions related to the user.
export const getAnswer = (mUsername) => fetch(`http://localhost:5000/an/answer/${mUsername}`).then(res=>res.clone().json());

//Display all answers
export const allAnswers =() =>fetch("http://localhost:5000/an/").then(res => res.clone().json());

//Display Adetails
export const getAnswers = (id) => fetch(`http://localhost:5000/an/as/${id}`).then(res => res.clone().json());

//Updates the question details
export const updateAnswer =  (answer, id)=> fetch(`http://localhost:5000/an/as/updateA/${id}`,{
    method: "POST",
    headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Deletes selected Question
export const deleteAnswer = (answer, id) => fetch(`http://localhost:5000/an/as/deleteA/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});