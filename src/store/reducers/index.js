import { SET_QUESTIONS } from '../actions/action-types';
import { _getQuestions } from '../../data/_DATA';
import { allQuestions } from '../actions/action-creators';

export function getAllQuestions() {
	return (dispatch) => {
		_getQuestions().then((questions) => {
			dispatch(allQuestions(Object.values(questions)));
		});
	};
}
export default function questions(state = [], action) {
	const { type } = action;
	switch (type) {
		case SET_QUESTIONS:
			return action.questions;
		default:
			return state;
	}
}
