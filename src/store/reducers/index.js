import { SET_LOADING, SET_QUESTIONS, SET_USERS } from '../actions/action-types';
import { _getQuestions, _getUsers } from '../../data/_DATA';
import { allQuestions, allUsers, setLoading } from '../actions/action-creators';

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
