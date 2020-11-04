import {SET_QUESTIONS} from "../actions/action-types";

export default function questions(state=[],action){
    const {type} = action ;
    switch (type){
        case SET_QUESTIONS:
            return action.questions ;
        default:
            return state;
    }
}