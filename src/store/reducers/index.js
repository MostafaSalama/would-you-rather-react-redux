import {
	SET_AUTH_USER,
	SET_LOADING,
	SET_QUESTIONS,
	SET_USERS,
} from '../actions/action-types';
import {_getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer} from '../../data/_DATA';
import {allQuestions, allUsers, setAuthUser, setLoading} from '../actions/action-creators';

export function getInitialData() {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const questions = await _getQuestions();
		const users = await _getUsers();
		dispatch(allUsers(users));
		dispatch(allQuestions(Object.values(questions)));
		dispatch(setLoading(false));
	};
}
export function saveQuestion({ author, optionOneText, optionTwoText }) {
	return async (dispatch) => {
		dispatch(setLoading(true));
		const question = await _saveQuestion({
			author,
			optionOneText,
			optionTwoText,
		});
		dispatch(setLoading(false));
		return question;
	};
}
export function questions(state = [], action) {
	const { type } = action;
	switch (type) {
		case SET_QUESTIONS:
			return action.questions;
		default:
			return state;
	}
}
export function users(state = [], action) {
	const { type } = action;
	switch (type) {
		case SET_USERS:
			return action.users;
		default:
			return state;
	}
}
export function isLoading(state = false, { type, value }) {
	switch (type) {
		case SET_LOADING:
			return value;
		default:
			return state;
	}
}

export function loginUser(username){
	return async (dispatch) => {
		return dispatch(setAuthUser(username))
	}
}

export function authUser(state = '', { type, username }) {
	switch (type) {
		case SET_AUTH_USER:
			return username;
		default:
			return state;
	}
}

export function saveQuestionAnswer({ authedUser, qid, answer }){
	return async (dispatch) => {
		dispatch(setLoading(true));
		const question = await _saveQuestionAnswer({
			authedUser,
			qid,
			answer,
		});
		dispatch(setLoading(false));
		return question;
	};
}