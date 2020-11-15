import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // no changes here 😀
import { authUser, isLoading, questions, users } from './reducers';

const reducer = combineReducers({
	questions,
	users,
	isLoading,
	authUser,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
