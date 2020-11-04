import {GET_QUESTIONS, GET_USERS, SAVE_NEW_QUESTION, SAVE_QUESTION_ANSWER} from "./action-types";

/**
 * return an action object with all questions from the data
 * @param questions
 * @returns {{questions: *, type: string}}
 */
export function allQuestions(questions) {
    return {
        type:GET_QUESTIONS,
        questions
    }
}

/**
 *  return action with type SAVE_NEW_QUESTION and the question to be saved in the state
 * @param question {{author:string,optionOneText:string,optionTwoText:string}}
 * @returns {{question: *, type: string}}
 */
export function newQuestion(question){
    return {
        type: SAVE_NEW_QUESTION,
        question
    }
}

/**
 *
 * @param users
 * @returns {{type: string, users: *}}
 */
export function allUsers(users){
    return {
        type:GET_USERS,
        users
    }
}

/**
 *
 * @param answer{{authedUser:string,qid:string,answer:string}}
 * @returns {{answer: *, type: string}}
 */
export function newAnswer(answer){
    return {
        type:SAVE_QUESTION_ANSWER,
        answer
    }
}