import { combineReducers } from "redux";

const rootReducer = (state = {}, action) =>{

    switch (action.type) {

        case 'LOG_IN':
            return action.form

        case 'LOG_OUT':
            return {};

        default:
            return state;
    }
};

export const rootReducers = combineReducers({
    form : rootReducer
});