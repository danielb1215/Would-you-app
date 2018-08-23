import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const VOTE = 'VOTE';
export const ADD_QUESTION = 'ADD_QUESTION'



export function receiveQuestions (questions){
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
function vote({ authedUser, qid, answer }){
    return{
        type: VOTE,
        authedUser,
        qid,
        answer
    }
}
export function handleVote (authedUser, qid, answer){
    return (dispatch) => {
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })  
        .then((question) => dispatch(vote({
            authedUser,
            qid,
            answer
        })))    
    }
    
}
function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
    return(dispatch) => {
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author,
        })
        .then(question => dispatch(addQuestion(question)))
    }
}

