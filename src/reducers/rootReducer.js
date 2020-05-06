import { combineReducers } from "redux";

const initialState = {
    message: 'Let`s login',
    login: false
};

const rootReducer = (state = initialState, action) =>{

    switch (action.type) {

        case 'LOG_IN':
            return action.form;

        case 'LOG_OUT':
            return action.form;

        default:
            return state;
    }
};

export const rootReducers = combineReducers({
    form : rootReducer
});