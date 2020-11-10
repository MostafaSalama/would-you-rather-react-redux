import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // no changes here 😀
import { isLoading, questions, users } from './reducers';

const reducer = combineReducers({
	questions,
	users,
	isLoading,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
