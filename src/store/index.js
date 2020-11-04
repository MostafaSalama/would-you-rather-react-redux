import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // no changes here 😀
import questions from './reducers';

const reducer = combineReducers({
	questions,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
