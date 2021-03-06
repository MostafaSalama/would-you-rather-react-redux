import {
	SET_QUESTIONS,
	SET_USERS,
	SAVE_NEW_QUESTION,
	SAVE_QUESTION_ANSWER,
	SET_LOADING,
	SET_AUTH_USER,
} from './action-types';

/**
 * return an action object with all questions from the data
 * @param questions
 * @returns {{questions: *, type: string}}
 */
export function allQuestions(questions) {
	return {
		type: SET_QUESTIONS,
		questions,
	};
}

/**
 *  return action with type SAVE_NEW_QUESTION and the question to be saved in the state
 * @param question {{author:string,optionOneText:string,optionTwoText:string}}
 * @returns {{question: *, type: string}}
 */
export function newQuestion(question) {
	return {
		type: SAVE_NEW_QUESTION,
		question,
	};
}

/**
 *
 * @param users
 * @returns {{type: string, users: *}}
 */
export function allUsers(users) {
	return {
		type: SET_USERS,
		users,
	};
}

/**
 *
 * @param answer{{authedUser:string,qid:string,answer:string}}
 * @returns {{answer: *, type: string}}
 */
export function newAnswer(answer) {
	return {
		type: SAVE_QUESTION_ANSWER,
		answer,
	};
}

/**
 *
 * @param loading {boolean}
 * @returns {{type: string, value: boolean}}
 */
export function setLoading(loading) {
	return {
		type: SET_LOADING,
		value: loading,
	};
}

export function setAuthUser(username) {
	return {
		type: SET_AUTH_USER,
		username,
	};
}
