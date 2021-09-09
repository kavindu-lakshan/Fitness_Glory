//Display all the questions related to the user.
export const getQuestions = (mUsername) => fetch(`http://localhost:5000/qu/member/QandA/${mUsername}`).then(res=>res.clone().json());

//Display the Username of the client in the create form
export const getQuestion = (mUsername) => fetch(`http://localhost:5000/qu/member/q/${mUsername}`).then(res=>res.clone().json());

//Display selected question details
export const selectQuestion = (id) => fetch(`http://localhost:5000/qu/member/${id}`).then(res => res.clone().json());

//Create question
export const createQuestion = (question) => fetch("http://localhost:5000/qu/member/q/createQ",{
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

//Deletes selected Question
export const deleteQuestion = (question, id) => fetch(`http://localhost:5000/qu/member/deleteQ/${id}`, {
    method:"DELETE", 
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(question)
});

//Display all questions
export const allQuestions =() =>fetch("http://localhost:5000/qu/member/").then(res => res.clone().json());

//Display selected question details
export const selectQuestionDetails = (id) => fetch(`http://localhost:5000/qu/member/selectedQ/${id}`).then(res => res.clone().json());

//Display question details in answer form
export const selectQuestionDetailsA = (id) => fetch(`http://localhost:5000/an/member/a/${id}`).then(res => res.clone().json());

//Create answer
export const createAnswer = (answer) => fetch("http://localhost:5000/an/member/a/createA",{
    method:"POST",
    headers:{
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body:JSON.stringify(answer)
});

//Display all the answers related to the user.
export const getAnswer = (mUsername) => fetch(`http://localhost:5000/an/member/answer/${mUsername}`).then(res=>res.clone().json());

//Display all answers
export const allAnswers =() =>fetch("http://localhost:5000/an/member/").then(res => res.clone().json());

//Display answer details
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
