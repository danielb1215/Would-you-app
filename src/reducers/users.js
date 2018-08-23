import { RECEIVE_USERS } from '../actions/users'
const VOTE = 'VOTE'
const ADD_QUESTION = 'ADD_QUESTION'
export default function users (state = {}, action ){
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case VOTE:     
            return {
                ...state,
                [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer,
                },
                },
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id]),
                       
                    
                }
            }
        default:
            return state    
    }
}