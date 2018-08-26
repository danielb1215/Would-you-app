export const RECEIVE_USERS = 'RECEIVE_USERS'
export const VOTE = 'VOTE'
export const ADD_QUESTION = 'ADD_QUESTION' 

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}
