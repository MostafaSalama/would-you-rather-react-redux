import {GET_QUESTIONS, SAVE_NEW_QUESTION} from "./action-types";

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